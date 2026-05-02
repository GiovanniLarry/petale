// Vercel Serverless Function entrypoint.
// All `/api/*` requests are rewritten here via `vercel.json`.

const rooms = new Map();
const promptTimeouts = new Map();

// --- Prompt banks (copied from server.js) ---
// NOTE: Keep these arrays aligned with your desired content.

const normalPetales = [
  "Quel est ton meilleur souvenir d'enfance ?",
  "Quelle est la chose la plus gentille que quelqu'un t'ait faite ?",
  "As-tu déjà eu un coup de foudre ?",
  "Quelle est ta qualité préférée chez une personne ?",
  "Quel est ton rêve le plus cher ?",
  "Qu'est-ce qui te rend vraiment heureux(se) ?",
  "As-tu déjà écrit une lettre d'amour ?",
  "Quel est ton film romantique préféré ?",
  "Quelle est la plus belle chose que tu aies vue ?",
  "As-tu déjà fait un geste romantique inattendu ?",
  "Quel est ton endroit préféré pour te détendre ?",
  "Qu'est-ce qui te fait rire aux éclats ?",
  "As-tu déjà dansé sous la pluie ?",
  "Quelle est ta chanson d'amour préférée ?",
  "Quel est le meilleur conseil que tu aies reçu ?",
  "As-tu déjà tenu quelqu'un par la main pour la première fois ?",
  "Quelle est ta saison préférée et pourquoi ?",
  "Qu'est-ce qui te met de bonne humeur ?",
  "As-tu déjà fait un compliment sincère à un inconnu ?",
  "Quel est ton plat préféré qui te réconforte ?",
  "As-tu déjà partagé un secret important ?",
  "Quelle est la chose la plus courageuse que tu aies faite ?",
  "As-tu déjà pleuré de joie ?",
  "Quel est ton souvenir préféré avec tes amis ?",
  "Qu'est-ce qui te rend nerveux(se) de manière adorable ?",
  "As-tu déjà fait une surprise à quelqu'un ?",
  "Quelle est ta fleur préférée ?",
  "As-tu déjà regardé les étoiles toute la nuit ?",
  "Quel est le plus beau coucher de soleil que tu aies vu ?",
  "As-tu déjà écrit un poème pour quelqu'un ?",
  "Quelle est ta façon préférée de dire 'je t'aime' ?",
  "As-tu déjà fait un vœu qui s'est réalisé ?",
  "Quel est ton animal préféré et pourquoi ?",
  "As-tu déjà eu une conversation qui a changé ta vie ?",
  "Quelle est la chose la plus douce que quelqu'un t'ait dite ?",
  "As-tu déjà offert un cadeau fait main ?",
  "Quel est ton parfum préféré ?",
  "As-tu déjà fait une promesse importante ?",
  "Quelle est ta couleur préférée et pourquoi ?",
  "As-tu déjà eu le souffle coupé par la beauté de quelque chose ?",
  "Quel est ton livre préféré qui t'inspire ?",
  "As-tu déjà fait quelque chose de spontané et merveilleux ?",
  "Quelle est la chose la plus romantique que tu puisses imaginer ?",
  "As-tu déjà ressenti un lien instantané avec quelqu'un ?",
  "Quel est le moment le plus précieux de ta vie ?",
  "As-tu déjà fait un rêve qui s'est réalisé ?",
  "Qu'est-ce qui te fait sentir vivant(e) ?",
  "Si tu pouvais voyager n'importe où, où irais-tu ?",
  "As-tu déjà dit 'je t'aime' et vraiment senti chaque mot ?"
];

const normalEpines = [
  "Fais un compliment sincère à quelqu'un dans la pièce.",
  "Prends la main de quelqu'un pendant 30 secondes.",
  "Fais un câlin à quelqu'un de ton choix.",
  "Chuchote un secret gentil à l'oreille de quelqu'un.",
  "Fais une imitation amusante d'un animal.",
  "Chante une chanson que tu aimes pendant 20 secondes.",
  "Fais une danse lente et gracieuse.",
  "Dessine un cœur dans l'air avec tes mains.",
  "Fais un massage doux des épaules pendant 1 minute.",
  "Raconte une histoire drôle qui t'est arrivée.",
  "Fais un vœu à voix haute.",
  "Prends une pose de yoga relaxante.",
  "Fais un bruit d'animal mignon.",
  "Écris un mot gentil sur ta main et montre-le.",
  "Fais un sourire le plus sincère possible.",
  "Fais une pirouette (si tu peux).",
  "Fais un geste de théâtre romantique.",
  "Chuchote 'merci' à quelqu'un.",
  "Fais un signe de paix.",
  "Fais une pause de méditation de 30 secondes.",
  "Fais un compliment sur la tenue de quelqu'un.",
  "Fais un geste de gratitude.",
  "Prends une pose de super-héros/héroïne.",
  "Fais un bruit d'applaudissement pour quelqu'un.",
  "Fais une expression de joie exagérée.",
  "Fais un signe de 'okay' avec style.",
  "Fais un mouvement de danse lent.",
  "Fais un clin d'œil charmant.",
  "Fais un geste de 'c'est génial'.",
  "Fais une pose de statue pendant 15 secondes.",
  "Fais un son de 'wow' impressionné.",
  "Fais un geste de 'viens ici'.",
  "Fais une expression de 'je suis d'accord'.",
  "Fais un mouvement de vague amical.",
  "Fais un geste de 'bravo'.",
  "Fais une expression de 'hmm... intéressant'.",
  "Fais un signe de 'secret'.",
  "Fais un mouvement de 'c'est parti'.",
  "Fais un geste de 'calme-toi'.",
  "Fais une expression de 'je t'écoute'.",
  "Fais un signe de 'réussite'.",
  "Fais un mouvement de 'c'est magnifique'.",
  "Fais un geste de 'amitié'.",
  "Fais une expression de 'je suis fier/fière'.",
  "Fais un signe de 'paix et amour'.",
  "Fais un mouvement de 'ensemble'.",
  "Finis par un grand sourire chaleureux à tout le monde."
];

// Soft bank (currently used for both modes in server.js)
const hotPetales = [
  "Quel geste tendre te fait fondre le plus vite ?",
  "Quel est ton souvenir le plus romantique ?",
  "Quel compliment te touche vraiment ?",
  "Preferes-tu une soiree surprise ou un plan improvise a deux ?",
  "Quelle ambiance te met immediatement dans une vibe intime ?",
  "Quel est ton langage de l'amour principal ?",
  "Quel detail chez une personne te captive le plus ?",
  "Quelle chanson te donne envie de te rapprocher ?",
  "Quel serait ton rendez-vous parfait ce soir ?",
  "As-tu deja eu un crush instantane ?",
  "Quel est ton plus grand green flag en amour ?",
  "Quel est ton plus grand turn-off en rendez-vous ?",
  "Tu preferes les mots doux ou les actes attentionnes ?",
  "Quelle ville te fait rever pour une escapade romantique ?",
  "As-tu deja recu un message qui t'a fait sourire toute la journee ?",
  "Quel est ton style de flirt prefere ?",
  "Quelle partie d'une conversation te fait te sentir connecte(e) ?",
  "As-tu deja ecrit un message sans jamais l'envoyer ?",
  "Quel moment de la journee te semble le plus romantique ?",
  "Quel est ton film d'amour prefere ?",
  "Quel est ton souvenir le plus mignon en couple ?",
  "Quelle odeur te rappelle quelqu'un que tu aimes ?",
  "Tu preferes un diner chic ou un pique-nique au coucher du soleil ?",
  "Quelle qualite te fait dire 'cette personne est speciale' ?",
  "Quel geste de jalousie douce te parait mignon ?",
  "As-tu deja ete amoureux(se) en secret ?",
  "Quelle est la plus belle phrase qu'on t'ait dite ?",
  "Quel est ton niveau d'audace quand tu flirtes ?",
  "Quel serait ton week-end parfait a deux ?",
  "Quel est ton ideal de complicite dans un couple ?",
  "Quel endroit te semble parfait pour un premier baiser ?",
  "Tu preferes une relation calme et stable ou intense et passionnee ?",
  "Quel est ton plus beau souvenir de nuit etoilee ?",
  "Qu'est-ce qui te rassure le plus dans une relation ?",
  "As-tu deja eu un rendez-vous catastrophique mais drole ?",
  "Quel est ton rituel prefere quand tu prepares un date ?",
  "Quel est ton emoji prefere quand tu flirtes ?",
  "Tu preferes une declaration publique ou en prive ?",
  "Quel trait de caractere te fait craquer ?",
  "Quelle musique choisirais-tu pour une danse lente ?",
  "Quel petit geste quotidien renforce l'amour selon toi ?",
  "Quel est ton plus grand reve romantique ?",
  "As-tu deja fait une surprise romantique ?",
  "Quel regard te fait perdre tes mots ?",
  "Quel serait ton voyage romantique ultime ?",
  "Tu preferes etre guide(e) ou prendre l'initiative en flirt ?",
  "Quel est ton souvenir prefere d'un premier rendez-vous ?",
  "Quelle verite sur toi est difficile a avouer en amour ?",
  "Qu'est-ce qui te fait te sentir desire(e) sans mots ?",
  "Si tu pouvais revivre un seul moment romantique, lequel choisirais-tu ?"
];

const hotEpines = [
  "Fais un compliment sincere en regardant la personne dans les yeux.",
  "Improvise une mini danse de 15 secondes.",
  "Raconte en 20 secondes ton date ideal.",
  "Fais un toast romantique imaginaire.",
  "Envoie un coeur avec tes mains a la table.",
  "Fais une pose 'couverture de magazine love'.",
  "Murmure une phrase douce (sans contenu explicite).",
  "Imite une scene romantique de film.",
  "Chante un refrain doux pendant 10 secondes.",
  "Fais un slow imaginaire sur place pendant 15 secondes.",
  "Decris en 3 mots ton style de seduction.",
  "Donne un surnom mignon a la personne visee.",
  "Fais un regard mysterieux pendant 5 secondes.",
  "Raconte un souvenir mignon en une phrase.",
  "Fais un clin d'oeil theatral.",
  "Dessine un coeur dans l'air avec tes doigts.",
  "Fais un geste galant (main sur le coeur, reverence, etc.).",
  "Dis une phrase de drague classe.",
  "Imite une declaration d'amour dramatique.",
  "Donne une note de romantisme a la soiree (sur 10).",
  "Fais un selfie imaginaire ultra glamour.",
  "Propose un theme pour le prochain rendez-vous.",
  "Fais un compliment sur le style vestimentaire d'un joueur.",
  "Decris ton humeur romantique actuelle en meteo.",
  "Fais un mini pas de tango.",
  "Raconte ton plus beau coucher de soleil en 1 phrase.",
  "Enumere 3 qualites que tu apprecies chez quelqu'un.",
  "Fais une imitation de voix 'radio de nuit'.",
  "Choisis une chanson qui represente ton coeur aujourd'hui.",
  "Fais une entree de star puis salue la table.",
  "Dis une phrase motivante pour un couple.",
  "Prends une pose elegante pendant 8 secondes.",
  "Fais un mini poeme de 2 lignes.",
  "Mime un rendez-vous parfait sans parler.",
  "Fais un sourire charmeur pendant 5 secondes.",
  "Propose une activite chill a faire a deux.",
  "Fais semblant d'offrir une fleur.",
  "Fais un geste de remerciement romantique.",
  "Invente un slogan d'amour pour la table.",
  "Dis ce qui rend une personne inoubliable pour toi.",
  "Mets-toi en mode 'presentateur de soiree love' 10 secondes.",
  "Donne une mission gentille au prochain joueur.",
  "Fais un coeur avec les bras au-dessus de la tete.",
  "Imite une marche confiante de podium.",
  "Donne un conseil flirt respectueux en une phrase.",
  "Fais un 'wow' admiratif exagere.",
  "Raconte ta chanson de couple ideale.",
  "Fais un signe de paix et amour.",
  "Decris ta vibe romantique avec un seul mot.",
  "Termine par un grand sourire et un geste elegant."
];

const promptsByMode = {
  normal: { petales: hotPetales, epines: hotEpines },
  hot: { petales: hotPetales, epines: hotEpines }
};

// --- helpers ---

function sendJson(res, data, status = 200) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 25_000_000) {
        req.destroy();
        reject(new Error("Request body is too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function normalizeRoomId(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 12);
}

function normalizeGameMode(value) {
  const mode = String(value || "").toLowerCase();
  if (mode === "hot") return "hot";
  if (mode === "normal") return "normal";
  return "";
}

function createToken(length) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function createRoomId() {
  let id = createToken(6);
  while (rooms.has(id)) {
    id = createToken(6);
  }
  return id;
}

function createRoom(id, gameMode = "normal") {
  return {
    id,
    gameMode: normalizeGameMode(gameMode) || "normal",
    players: [],
    messages: [],
    turnIndex: 0,
    currentTurnId: null,
    lastRotation: 0,
    round: null,
    updatedAt: Date.now()
  };
}

function addOrUpdatePlayer(room, player) {
  if (!player || !player.id || !player.name) {
    throw new Error("Player profile is required");
  }
  const existing = room.players.find((entry) => entry.id === player.id);
  const nextPlayer = {
    id: player.id,
    name: String(player.name).slice(0, 30),
    age: Number(player.age) || 18,
    signId: player.signId,
    signName: player.signName,
    signGlyph: player.signGlyph,
    signColors: player.signColors,
    connected: true,
    penalties: existing?.penalties || 0,
    joinedAt: existing?.joinedAt || Date.now()
  };
  if (existing) {
    Object.assign(existing, nextPlayer);
  } else {
    room.players.push(nextPlayer);
  }
  decorateRoom(room);
}

function decorateRoom(room) {
  const activePlayers = room.players.filter((player) => player.connected);
  if (!activePlayers.length) {
    room.currentTurnId = null;
    return room;
  }
  room.turnIndex = room.turnIndex % activePlayers.length;
  room.currentTurnId = activePlayers[room.turnIndex].id;
  return room;
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function resolveMessageType(type, fileName) {
  const normalizedType = String(type || "").toLowerCase();
  if (["image", "video", "audio"].includes(normalizedType)) {
    return normalizedType;
  }
  const extension = String(fileName || "").toLowerCase().split(".").pop();
  if (["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"].includes(extension)) return "image";
  if (["mp4", "webm", "mov", "mkv", "avi", "m4v"].includes(extension)) return "video";
  if (["mp3", "wav", "ogg", "oga", "m4a", "aac", "flac", "opus", "weba"].includes(extension)) return "audio";
  return "text";
}

function schedulePromptTimeout(roomId, roundId) {
  clearPromptTimeout(roomId);
  const timeoutId = setTimeout(() => {
    const room = rooms.get(roomId);
    if (!room || !room.round || room.round.id !== roundId || room.round.status !== "choosing") {
      return;
    }
    applyAutoPromptForChoosingRound(room);
    room.updatedAt = Date.now();
    decorateRoom(room);
  }, 30_000);
  promptTimeouts.set(roomId, timeoutId);
}

function clearPromptTimeout(roomId) {
  const timeoutId = promptTimeouts.get(roomId);
  if (timeoutId) {
    clearTimeout(timeoutId);
    promptTimeouts.delete(roomId);
  }
}

function applyAutoPromptForChoosingRound(room) {
  if (!room?.round || room.round.status !== "choosing") return;
  const mode = normalizeGameMode(room.round.mode || room.gameMode) || "normal";
  const modePrompts = promptsByMode[mode] || promptsByMode.normal;
  const promptSource = room.round.type === "petale" ? modePrompts.petales : modePrompts.epines;
  room.round.prompt = pick(promptSource);
  room.round.status = "pending";
  room.round.votes = {};
  clearPromptTimeout(room.id);
}

module.exports = async (req, res) => {
  try {
    const method = req.method || "GET";
    const query = req.query || {};
    const path = String(query.path || "").replace(/^\/+/, "");
    const parts = path.split("/").filter(Boolean);

    // Expected forms:
    // - rooms
    // - rooms/:roomId
    // - rooms/:roomId/join
    // - rooms/:roomId/spin
    // - rooms/:roomId/prompt
    // - rooms/:roomId/approve
    // - rooms/:roomId/messages

    if (method === "POST" && parts[0] === "rooms" && parts.length === 1) {
      const body = await readJson(req);
      const roomId = createRoomId();
      const room = createRoom(roomId, normalizeGameMode(body.player?.gameMode));
      addOrUpdatePlayer(room, body.player);
      rooms.set(roomId, room);
      sendJson(res, room);
      return;
    }

    if (parts[0] === "rooms" && parts[1]) {
      const roomId = normalizeRoomId(parts[1]);
      const action = parts[2] || "";
      if (!rooms.has(roomId)) {
        rooms.set(roomId, createRoom(roomId));
      }
      const room = rooms.get(roomId);

      if (method === "GET" && !action) {
        decorateRoom(room);
        sendJson(res, room);
        return;
      }

      if (method === "POST" && action === "join") {
        const body = await readJson(req);
        const requestedMode = normalizeGameMode(body.player?.gameMode);
        if (requestedMode) {
          room.gameMode = requestedMode;
        }
        addOrUpdatePlayer(room, body.player);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(res, room);
        return;
      }

      if (method === "POST" && action === "spin") {
        const body = await readJson(req);
        const activePlayers = room.players.filter((player) => player.connected);
        if (activePlayers.length < 2) {
          sendJson(res, { error: "Il faut au moins 2 joueurs connectes pour spinner." }, 400);
          return;
        }
        if (room.round?.status === "pending" || room.round?.status === "choosing") {
          sendJson(res, { error: "Un tour est deja en cours" }, 409);
          return;
        }
        const spinner = room.players.find((player) => player.id === body.playerId && player.connected);
        if (!spinner) {
          sendJson(res, { error: "Joueur non connecte dans la salle" }, 403);
          return;
        }

        const targetIndex = Math.floor(Math.random() * activePlayers.length);
        const target = activePlayers[targetIndex];
        const type = Math.random() >= 0.5 ? "petale" : "epine";
        const mode = normalizeGameMode(room.gameMode) || "normal";

        const targetSeatIndex = activePlayers.findIndex((player) => player.id === target.id);
        const seatAngle = -90 + (360 / activePlayers.length) * Math.max(targetSeatIndex, 0);
        const desiredRotation = normalizeDegrees(seatAngle + 90);
        const baseRotation = Math.ceil((room.lastRotation + 1080) / 360) * 360;
        const rotation = baseRotation + desiredRotation + Math.floor(Math.random() * 2) * 360;
        room.lastRotation = rotation;

        room.round = {
          id: createToken(8),
          spinnerId: body.playerId,
          targetId: target.id,
          type,
          prompt: "",
          status: "choosing",
          votes: {},
          mode,
          chooseDeadlineAt: Date.now() + 30_000,
          rotation,
          createdAt: Date.now()
        };
        schedulePromptTimeout(room.id, room.round.id);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(res, room);
        return;
      }

      if (method === "POST" && action === "prompt") {
        const body = await readJson(req);
        if (!room.round || room.round.status !== "choosing") {
          sendJson(res, { error: "Aucun choix de question en attente." }, 409);
          return;
        }
        if (body.playerId !== room.round.targetId) {
          sendJson(res, { error: "Seul le joueur cible peut choisir la question." }, 403);
          return;
        }

        if (body.mode === "custom") {
          const prompt = String(body.prompt || "").trim().slice(0, 400);
          if (!prompt) {
            sendJson(res, { error: "Entrez votre question." }, 400);
            return;
          }
          clearPromptTimeout(room.id);
          room.round.prompt = prompt;
          room.round.status = "pending";
          room.round.votes = {};
          room.updatedAt = Date.now();
          decorateRoom(room);
          sendJson(res, room);
          return;
        }

        applyAutoPromptForChoosingRound(room);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(res, room);
        return;
      }

      if (method === "POST" && action === "approve") {
        const body = await readJson(req);
        if (!room.round || room.round.status !== "pending") {
          sendJson(res, room);
          return;
        }

        if (body.playerId !== room.round.targetId) {
          room.round.votes[body.playerId] = Boolean(body.approved);
        }

        const voters = room.players
          .filter((player) => player.connected && player.id !== room.round.targetId)
          .map((player) => player.id);
        const values = voters.map((id) => room.round.votes[id]);
        const hasRejection = values.includes(false);
        const everyoneVoted = voters.length > 0 && values.every((value) => typeof value === "boolean");

        if (hasRejection || everyoneVoted) {
          room.round.status = hasRejection ? "penalized" : "approved";
          if (hasRejection) {
            const target = room.players.find((player) => player.id === room.round.targetId);
            if (target) {
              target.penalties += 1;
            }
          }
        }

        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(res, room);
        return;
      }

      if (method === "POST" && action === "messages") {
        const body = await readJson(req);
        const player = room.players.find((entry) => entry.id === body.playerId);
        if (!player) {
          sendJson(res, { error: "Joueur introuvable dans la salle" }, 403);
          return;
        }

        const message = {
          id: createToken(10),
          playerId: player.id,
          playerName: player.name,
          type: resolveMessageType(body.type, body.fileName),
          text: String(body.text || "").slice(0, 1200),
          media: body.media || null,
          fileName: String(body.fileName || "").slice(0, 120),
          createdAt: Date.now()
        };

        if (message.type === "text" && !message.text.trim()) {
          sendJson(res, { error: "Message vide" }, 400);
          return;
        }

        room.messages.push(message);
        room.messages = room.messages.slice(-80);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(res, room);
        return;
      }
    }

    sendJson(res, { error: "Not found" }, 404);
  } catch (error) {
    sendJson(res, { error: error.message }, 500);
  }
};

