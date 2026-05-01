const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8000);
const host = "0.0.0.0";
const rooms = new Map();
const promptTimeouts = new Map();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

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
// Questions et actions spécifiques au mode Désir Sensuel
const hotPetales = [
    "Quel est l'endroit le plus inhabituel où tu as déjà fait l'amour ?",
    "Quelle est la partie de ton corps que tu préfères qu'on embrasse ou caresse ?",
    "As-tu déjà eu un fantasme avec quelqu'un de cette pièce ?",
    "Quelle est ta position sexuelle préférée ?",
    "Quel est le meilleur orgasme que tu aies jamais eu ?",
    "Aimes-tu plutôt doux et romantique ou sauvage et intense ?",
    "Quel est ton plus grand fantasme que tu n'as jamais réalisé ?",
    "As-tu déjà eu un rêve érotique avec moi ?",
    "Quelle est la chose la plus coquine que tu aies faite en public ?",
    "Combien de temps peux-tu durer pendant un rapport sexuel ?",
    "Préfères-tu recevoir ou donner du plaisir oral ?",
    "Quel est ton jouet sexuel préféré ?",
    "As-tu déjà simulé un orgasme ?",
    "Quel type de lingerie te fait le plus d'effet ?",
    "À quel moment de la journée as-tu le plus envie de sexe ?",
    "Quelle est la zone érogène la plus sensible de ton corps ?",
    "As-tu déjà fait un strip-tease ?",
    "Quel mot ou phrase te fait immédiatement mouiller/bander ?",
    "Préfères-tu la lumière allumée ou éteinte pendant l'acte ?",
    "As-tu déjà eu une relation sexuelle avec plusieurs personnes en même temps ?",
    "Quelle est la chose la plus osée que tu aies envoyée par message ?",
    "Aimes-tu être dominé(e) ou dominer ?",
    "Quel est ton film ou livre érotique préféré ?",
    "As-tu déjà couché avec quelqu'un dès le premier rendez-vous ?",
    "Quelle est la durée idéale d'un préliminaire pour toi ?",
    "Aimes-tu les morsures ou les griffures pendant le sexe ?",
    "Quel est le compliment le plus excitant qu'on t'ait jamais fait ?",
    "As-tu déjà eu un orgasme juste en te faisant embrasser le cou ?",
    "Préfères-tu les cheveux tirés ou les fesses claqué ?",
    "Quel est ton plus gros kink (fétiche) ?",
    "As-tu déjà utilisé de la nourriture pendant un rapport sexuel ?",
    "Quelle chanson te met tout de suite dans l'ambiance ?",
    "Aimes-tu parler sale pendant le sexe ?",
    "Quel est l'endroit où tu rêves de faire l'amour ?",
    "As-tu déjà été surpris(e) en train de te masturber ?",
    "Quelle est ta façon préférée de te faire toucher les seins/fesses ?",
    "Préfères-tu les yeux bandés ou les mains attachées ?",
    "As-tu déjà eu un plan cul avec un(e) inconnu(e) ?",
    "Quel est le meilleur rapport sexuel que tu aies eu cette année ?",
    "Aimes-tu qu'on te parle en français ou dans une autre langue pendant le sexe ?",
    "Quelle partie de mon corps te fait le plus envie en ce moment ?",
    "As-tu déjà fait l'amour dans une voiture ?",
    "Quel est ton rythme préféré : lent et profond ou rapide et fort ?",
    "Aimes-tu les sex-toys pendant le rapport ?",
    "Quelle est la chose la plus excitante qu'on t'ait faite avec la langue ?",
    "As-tu déjà eu un orgasme multiple ?",
    "Préfères-tu être dessus ou dessous ?",
    "Quel est ton plus grand regret sexuel ?",
    "Aimes-tu qu'on te regarde pendant que tu te caresses ?",
    "Si on devait coucher ensemble ce soir, que voudrais-tu qu'on te fasse en premier ?"
];

const hotEpines = [
    "Fais un strip-tease lent de 30 secondes.",
    "Embrasse-moi dans le cou pendant 20 secondes.",
    "Enlève un vêtement de ton choix.",
    "Assieds-toi sur mes genoux et fais un mouvement sensuel pendant 15 secondes.",
    "Lèche mon doigt lentement et sensuellement.",
    "Montre-moi comment tu te caresses les seins/fesses.",
    "Fais-moi un massage sensuel des épaules pendant 1 minute.",
    "Embrasse-moi langoureusement pendant 30 secondes.",
    "Laisse-moi t'embrasser où je veux pendant 20 secondes.",
    "Fais un bruit de plaisir (gémissement) très convaincant.",
    "Danse de manière sexy sur une chanson de ton choix.",
    "Lèche mes lèvres sans m'embrasser vraiment.",
    "Enlève ton soutien-gorge/slip sans enlever tes autres vêtements.",
    "Murmure-moi à l'oreille la chose la plus coquine que tu veux me faire.",
    "Laisse-moi te donner une fessée (douce ou forte selon ton choix).",
    "Fais-moi un lap dance de 20 secondes.",
    "Embrasse mon torse ou mon ventre lentement.",
    "Laisse-moi caresser tes cuisses pendant 30 secondes.",
    "Montre-moi ton visage 'quand tu prends du plaisir'.",
    "Fais un French kiss très intense pendant 25 secondes.",
    "Lèche un glaçon de manière sensuelle devant moi.",
    "Laisse-moi t'attacher les mains pendant 1 minute (sans rien faire de plus).",
    "Caresse-toi lentement devant moi pendant 30 secondes.",
    "Embrasse-moi en descendant du cou jusqu'au nombril.",
    "Fais-moi une fellation/cunnilingus avec tes vêtements sur pendant 20 secondes (simulation).",
    "Laisse-moi te bander les yeux pendant 1 minute.",
    "Dis-moi un fantasme en me regardant dans les yeux.",
    "Frotte tes fesses contre moi pendant 15 secondes.",
    "Laisse-moi te mordiller le lobe de l'oreille.",
    "Fais un massage érotique de mes cuisses.",
    "Enlève lentement tes chaussettes de manière sexy.",
    "Laisse-moi t'embrasser l'intérieur des cuisses.",
    "Gémis mon prénom de façon sensuelle.",
    "Fais-moi un hickey (suçon) à l'endroit que je choisis.",
    "Danse collé-serré avec moi pendant 30 secondes.",
    "Lèche du chocolat ou de la chantilly sur mon corps.",
    "Laisse-moi te donner des baisers partout sur le ventre.",
    "Prends une pose sexy et reste comme ça 10 secondes.",
    "Murmure-moi à l'oreille ce que tu veux que je te fasse.",
    "Fais un slow sensuel en me serrant fort.",
    "Laisse-moi te caresser les fesses pendant 20 secondes.",
    "Embrasse-moi en tirant doucement mes cheveux.",
    "Fais-moi un massage des pieds très sensuel.",
    "Lèche mes tétons lentement.",
    "Assieds-toi sur moi face à face et bouge lentement pendant 20 secondes.",
    "Laisse-moi te claquer les fesses 3 fois.",
    "Fais un strip-tease complet (si tu es à l'aise).",
    "Laisse-moi t'embrasser le bas du dos.",
    "Caresse-toi les parties intimes par-dessus tes vêtements pendant 15 secondes.",
    "Finis par un long baiser très passionné où tu prends le contrôle."
];
const promptsByMode = {
  // Forcer uniquement les 100 questions fournies (50 verites + 50 actions)
  normal: { petales: hotPetales, epines: hotEpines },
  hot: { petales: hotPetales, epines: hotEpines }
};

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${host}:${port}`);

  if (url.pathname.startsWith("/api/")) {
    await handleApi(request, response, url);
    return;
  }

  serveStatic(url, response);
});

async function handleApi(request, response, url) {
  const parts = url.pathname.split("/").filter(Boolean);

  try {
    if (request.method === "POST" && url.pathname === "/api/rooms") {
      const body = await readJson(request);
      const roomId = createRoomId();
      const room = createRoom(roomId, normalizeGameMode(body.player?.gameMode));
      addOrUpdatePlayer(room, body.player);
      rooms.set(roomId, room);
      sendJson(response, room);
      return;
    }

    if (parts[0] === "api" && parts[1] === "rooms" && parts[2]) {
      const roomId = normalizeRoomId(parts[2]);
      const action = parts[3];

      if (!rooms.has(roomId)) {
        rooms.set(roomId, createRoom(roomId));
      }

      const room = rooms.get(roomId);

      if (request.method === "GET" && !action) {
        decorateRoom(room);
        sendJson(response, room);
        return;
      }

      if (request.method === "POST" && action === "join") {
        const body = await readJson(request);
        const requestedMode = normalizeGameMode(body.player?.gameMode);
        if (requestedMode) {
          room.gameMode = requestedMode;
        }
        addOrUpdatePlayer(room, body.player);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(response, room);
        return;
      }

      if (request.method === "POST" && action === "spin") {
        const body = await readJson(request);
        const activePlayers = room.players.filter((player) => player.connected);
        if (activePlayers.length < 2) {
          sendJson(response, { error: "Il faut au moins 2 joueurs connectes pour spinner." }, 400);
          return;
        }
        if (room.round?.status === "pending") {
          sendJson(response, { error: "Un tour est deja en cours" }, 409);
          return;
        }

        const spinner = room.players.find((player) => player.id === body.playerId && player.connected);
        if (!spinner) {
          sendJson(response, { error: "Joueur non connecte dans la salle" }, 403);
          return;
        }

        const targetIndex = Math.floor(Math.random() * activePlayers.length);
        const target = activePlayers[targetIndex];
        const type = Math.random() >= 0.5 ? "petale" : "epine";
        const mode = normalizeGameMode(room.gameMode) || "normal";
        const modePrompts = promptsByMode[mode] || promptsByMode.normal;
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
        sendJson(response, room);
        return;
      }

      if (request.method === "POST" && action === "approve") {
        const body = await readJson(request);
        if (!room.round || room.round.status !== "pending") {
          sendJson(response, room);
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
          // Pas de tour de role: tout le monde peut spinner quand le round est termine.
        }

        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(response, room);
        return;
      }

      if (request.method === "POST" && action === "prompt") {
        const body = await readJson(request);
        if (!room.round || room.round.status !== "choosing") {
          sendJson(response, { error: "Aucun choix de question en attente." }, 409);
          return;
        }
        if (body.playerId !== room.round.targetId) {
          sendJson(response, { error: "Seul le joueur cible peut choisir la question." }, 403);
          return;
        }

        let prompt = "";
        if (body.mode === "custom") {
          prompt = String(body.prompt || "").trim().slice(0, 400);
          if (!prompt) {
            sendJson(response, { error: "Entrez votre question." }, 400);
            return;
          }
          clearPromptTimeout(room.id);
          room.round.prompt = prompt;
          room.round.status = "pending";
          room.round.votes = {};
          room.updatedAt = Date.now();
          decorateRoom(room);
          sendJson(response, room);
          return;
        } else {
          applyAutoPromptForChoosingRound(room);
          room.updatedAt = Date.now();
          decorateRoom(room);
          sendJson(response, room);
          return;
        }
      }

      if (request.method === "POST" && action === "messages") {
        const body = await readJson(request);
        const player = room.players.find((entry) => entry.id === body.playerId);
        if (!player) {
          sendJson(response, { error: "Joueur introuvable dans la salle" }, 403);
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
          sendJson(response, { error: "Message vide" }, 400);
          return;
        }

        room.messages.push(message);
        room.messages = room.messages.slice(-80);
        room.updatedAt = Date.now();
        decorateRoom(room);
        sendJson(response, room);
        return;
      }
    }

    sendJson(response, { error: "Not found" }, 404);
  } catch (error) {
    sendJson(response, { error: error.message }, 500);
  }
}

function serveStatic(url, response) {
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  });
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

function currentTurnPlayer(room) {
  decorateRoom(room);
  return room.players.find((player) => player.id === room.currentTurnId);
}

function advanceTurn(room) {
  const activePlayers = room.players.filter((player) => player.connected);
  if (!activePlayers.length) {
    room.turnIndex = 0;
    room.currentTurnId = null;
    return;
  }
  room.turnIndex = (room.turnIndex + 1) % activePlayers.length;
  decorateRoom(room);
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let data = "";
    request.on("data", (chunk) => {
      data += chunk;
      if (data.length > 25_000_000) {
        request.destroy();
        reject(new Error("Request body is too large"));
      }
    });
    request.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    request.on("error", reject);
  });
}

function sendJson(response, data, status = 200) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function createRoomId() {
  let id = createToken(6);
  while (rooms.has(id)) {
    id = createToken(6);
  }
  return id;
}

function createToken(length) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function normalizeRoomId(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "");
}

function normalizeGameMode(value) {
  const mode = String(value || "").toLowerCase();
  if (mode === "hot") {
    return "hot";
  }
  if (mode === "normal") {
    return "normal";
  }
  return "";
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
  if (!room?.round || room.round.status !== "choosing") {
    return;
  }
  const mode = normalizeGameMode(room.round.mode || room.gameMode) || "normal";
  const modePrompts = promptsByMode[mode] || promptsByMode.normal;
  const promptSource = room.round.type === "petale" ? modePrompts.petales : modePrompts.epines;
  room.round.prompt = pick(promptSource);
  room.round.status = "pending";
  room.round.votes = {};
  clearPromptTimeout(room.id);
}

function resolveMessageType(type, fileName) {
  const normalizedType = String(type || "").toLowerCase();
  if (["image", "video", "audio"].includes(normalizedType)) {
    return normalizedType;
  }

  const extension = String(fileName || "").toLowerCase().split(".").pop();
  if (["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"].includes(extension)) {
    return "image";
  }
  if (["mp4", "webm", "mov", "mkv", "avi", "m4v"].includes(extension)) {
    return "video";
  }
  if (["mp3", "wav", "ogg", "oga", "m4a", "aac", "flac", "opus", "weba"].includes(extension)) {
    return "audio";
  }
  return "text";
}

function normalizeDegrees(value) {
  return ((value % 360) + 360) % 360;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

server.listen(port, host, () => {
  console.log(`Petales & Epines running at http://${host}:${port}/`);
});
