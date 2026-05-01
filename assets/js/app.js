// Contenu pour le mode Pétale et Sourire (normal) - questions douces et romantiques
const normalModeContent = {
  truths: [
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
  ],
  actions: [
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
  ]
};



// Fonction pour mélanger un tableau (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fonction pour obtenir un prompt sans répétition
function getUniquePrompt(gameMode, contentType) {
  // Choisir le bon contenu selon le mode
  const modeContent = gameMode === 'hot' ? hotModeContent : normalModeContent;
  const allContent = contentType === 'truths' ? modeContent.truths : modeContent.actions;
  const usedList = state.usedPrompts[gameMode][contentType];
  
  // Si toutes les questions ont été utilisées, réinitialiser
  if (usedList.length >= allContent.length) {
    console.log(`🔄 Réinitialisation des ${contentType} - tout a été utilisé`);
    state.usedPrompts[gameMode][contentType] = [];
  }
  
  // Filtrer les questions non utilisées
  const availableContent = allContent.filter(item => !usedList.includes(item));
  
  // Si aucune question disponible (ne devrait pas arriver), réinitialiser
  if (availableContent.length === 0) {
    console.log(`⚠️ Aucune ${contentType} disponible, réinitialisation forcée`);
    state.usedPrompts[gameMode][contentType] = [];
    return getUniquePrompt(gameMode, contentType);
  }
  
  // Choisir une question aléatoire parmi les disponibles
  const prompt = availableContent[Math.floor(Math.random() * availableContent.length)];
  
  // Ajouter à la liste des utilisées
  state.usedPrompts[gameMode][contentType].push(prompt);
  
  console.log(`📋 ${contentType} utilisées: ${state.usedPrompts[gameMode][contentType].length}/${allContent.length}`);
  
  return prompt;
}

// Fonction pour générer un prompt selon le mode de jeu
function generatePrompt(gameMode = 'normal', type = null) {
  console.log("🎮 generatePrompt appelé avec gameMode:", gameMode, "type:", type);
  console.log("🔍 state.gameMode:", state.gameMode);
  console.log("🔍 state.room?.gameMode:", state.room?.gameMode);
  
  // FORCER LE CONTENU EXACT - PLUS DE QUESTION PAR DEFAUT
  const finalMode = gameMode;
  console.log("🎯 MODE UTILISÉ:", finalMode);
  
  if (finalMode === 'hot') {
    // Mode Désir Sensuel : utiliser notre contenu personnalisé sans répétition
    const isTruth = type === 'truth' || (!type && Math.random() < 0.5);
    const contentType = isTruth ? 'truths' : 'actions';
    const prompt = getUniquePrompt('hot', contentType);
    
    console.log("🔥 CONTENU HOT UTILISÉ - isTruth:", isTruth, "prompt:", prompt);
    console.log("📊 hotModeContent.truths length:", hotModeContent.truths.length);
    console.log("📊 hotModeContent.actions length:", hotModeContent.actions.length);
    
    // VÉRIFICATION : s'assurer que c'est bien notre contenu
    const isInHotTruths = hotModeContent.truths.includes(prompt);
    const isInHotActions = hotModeContent.actions.includes(prompt);
    console.log("✅ VÉRIFICATION HOT - isInTruths:", isInHotTruths, "isInActions:", isInHotActions);
    
    if (!isInHotTruths && !isInHotActions) {
      console.error("❌ ERREUR : La question n'est pas dans notre contenu hot !", prompt);
    }
    
    return {
      prompt: prompt,
      type: isTruth ? 'petale' : 'epine'
    };
  }
  
  // Mode normal : utiliser le contenu doux et romantique
  const isTruth = type === 'truth' || (!type && Math.random() < 0.5);
  const contentType = isTruth ? 'truths' : 'actions';
  const prompt = getUniquePrompt('normal', contentType);
  
  console.log("🌸 CONTENU NORMAL UTILISÉ - isTruth:", isTruth, "prompt:", prompt);
  console.log("📊 normalModeContent.truths length:", normalModeContent.truths.length);
  console.log("📊 normalModeContent.actions length:", normalModeContent.actions.length);
  
  // VÉRIFICATION : s'assurer que c'est bien notre contenu
  const isInNormalTruths = normalModeContent.truths.includes(prompt);
  const isInNormalActions = normalModeContent.actions.includes(prompt);
  console.log("✅ VÉRIFICATION NORMAL - isInTruths:", isInNormalTruths, "isInActions:", isInNormalActions);
  
  if (!isInNormalTruths && !isInNormalActions) {
    console.error("❌ ERREUR : La question n'est pas dans notre contenu normal !", prompt);
  }
  
  return {
    prompt: prompt,
    type: isTruth ? 'petale' : 'epine'
  };
}

// Stockage local des salles en mémoire (mode front-only)
const rooms = new Map();

function addOrUpdatePlayer(room, player) {
  if (!room || !player || !player.id) {
    return;
  }
  const existing = (room.players || []).find((entry) => entry.id === player.id);
  if (existing) {
    Object.assign(existing, player);
    return;
  }
  room.players = room.players || [];
  room.players.push({
    ...player,
    penalties: Number(player.penalties || 0)
  });
}

// API serveur partagée entre tous les joueurs de la salle
async function api(url, options = {}) {
  const method = options.method || "GET";
  const headers = {};
  let body;

  if (typeof options.body !== "undefined") {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(options.body);
  }

  const response = await fetch(url, {
    method,
    headers,
    body
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || `Erreur API (${response.status})`);
  }

  return data;
}

const STORAGE_KEY = "petales-epines-session";
const SOUND_PREF_KEY = "petales-epines-sound-enabled";
const AMBIENT_AUDIO_PLAYLIST = [
  "assets/audio/bg-1.mp3",
  "assets/audio/bg-2.mp3",
  "assets/audio/bg-3.mp3",
  "assets/audio/bg-4.mp3",
  "assets/audio/bg-5.mp3",
  "assets/audio/bg-6.mp3"
];

const signs = [
  { id: "belier", name: "Belier", glyph: "♈", colors: ["#ff477e", "#8f1535"], dates: "21 mars - 19 avril", description: "Feu direct, regard franc, aime prendre l'initiative quand le desir monte." },
  { id: "taureau", name: "Taureau", glyph: "♉", colors: ["#f4c76e", "#7b4e20"], dates: "20 avril - 20 mai", description: "Sensuel, patient, tactile; il savoure chaque detail avant de se livrer." },
  { id: "gemeaux", name: "Gemeaux", glyph: "♊", colors: ["#7f4cff", "#1f8f9f"], dates: "21 mai - 20 juin", description: "Joueur, curieux, bavard; une question peut devenir une tentation." },
  { id: "cancer", name: "Cancer", glyph: "♋", colors: ["#9ad7ff", "#5841a8"], dates: "21 juin - 22 juillet", description: "Doux, protecteur, intense quand la confiance ouvre la porte." },
  { id: "lion", name: "Lion", glyph: "♌", colors: ["#ff9f1c", "#a4133c"], dates: "23 juillet - 22 août", description: "Magnetique et fier; adore etre desire et rendre la scene inoubliable." },
  { id: "vierge", name: "Vierge", glyph: "♍", colors: ["#64d2a6", "#314b32"], dates: "23 août - 22 septembre", description: "Precis, attentif, troublant; remarque les petits gestes qui changent tout." },
  { id: "balance", name: "Balance", glyph: "♎", colors: ["#ffb3c6", "#6b3d88"], dates: "23 septembre - 22 octobre", description: "Charme elegant, tension subtile, aime quand le jeu reste beau et equilibre." },
  { id: "scorpion", name: "Scorpion", glyph: "♏", colors: ["#d0004b", "#12070e"], dates: "23 octobre - 21 novembre", description: "Intense, secret, hypnotique; les verites profondes ne lui font pas peur." },
  { id: "sagittaire", name: "Sagittaire", glyph: "♐", colors: ["#ff6b35", "#5b2cff"], dates: "22 novembre - 21 décembre", description: "Libre, audacieux, provocateur; transforme un simple tour en aventure." },
  { id: "capricorne", name: "Capricorne", glyph: "♑", colors: ["#b8c0ff", "#2d2a46"], dates: "22 décembre - 19 janvier", description: "Calme en surface, brulant en prive; aime les defis tenus jusqu'au bout." },
  { id: "verseau", name: "Verseau", glyph: "♒", colors: ["#4cc9f0", "#3a0ca3"], dates: "20 janvier - 18 février", description: "Original, electrique, imprevisible; il adore casser la routine." },
  { id: "poissons", name: "Poissons", glyph: "♓", colors: ["#b5179e", "#4361ee"], dates: "19 février - 20 mars", description: "Reveur, intuitif, enveloppant; laisse l'ambiance parler avant les mots." }
];

const state = {
  player: null,
  selectedSign: signs[0], // Bélier par défaut
  roomId: null,
  room: null,
  pollTimer: null,
  gameMode: 'normal', // 'normal' ou 'hot'
  // Suivi des questions déjà utilisées pour éviter les répétitions
  usedPrompts: {
    hot: {
      truths: [],
      actions: []
    },
    normal: {
      truths: [],
      actions: []
    }
  }
};

const elements = {
  enterButton: document.querySelector("#enter-button"),
  profileForm: document.querySelector("#profile-form"),
  nameInput: document.querySelector("#player-name"),
  ageInput: document.querySelector("#player-age"),
  zodiacSelect: document.querySelector("#zodiac-select"),
  selectedSign: document.querySelector("#selected-sign"),
  zodiacGrid: document.querySelector("#zodiac-grid"),
  choicePlayerLabel: document.querySelector("#choice-player-label"),
  choicePlayerCard: document.querySelector("#choice-player-card"),
  createRoomButton: document.querySelector("#create-room-button"),
  createNormalRoom: document.querySelector("#create-normal-room"),
  createHotRoom: document.querySelector("#create-hot-room"),
  roomOptionsPlayerCard: document.querySelector("#room-options-player-card"),
  joinRoomForm: document.querySelector("#join-room-form"),
  joinRoomId: document.querySelector("#join-room-id"),
  roomTitle: document.querySelector("#room-title"),
  roomCode: document.querySelector("#room-code"),
  copyRoom: document.querySelector("#copy-room"),
  spinButton: document.querySelector("#spin-button"),
  spinRoomButton: document.querySelector("#spin-room-button"),
  seats: document.querySelector("#seats"),
  roomStatus: document.querySelector("#room-status"),
  promptCard: document.querySelector("#prompt-card"),
  approvalPanel: document.querySelector("#approval-panel"),
  playersList: document.querySelector("#players-list"),
  compatibilityList: document.querySelector("#compatibility-list"),
  chatForm: document.querySelector("#chat-form"),
  chatInput: document.querySelector("#chat-input"),
  chatFile: document.querySelector("#chat-file"),
  chatRecordButton: document.querySelector("#chat-record-button"),
  mediaPreview: document.querySelector("#media-preview"),
  chatMessages: document.querySelector("#chat-messages"),
  roomPlayerLabel: document.querySelector("#room-player-label"),
  ambientAudio: document.querySelector("#ambient-audio"),
  soundToggle: document.querySelector("#sound-toggle")
};

let lastAnimatedRoundId = null;
let localSpinAnimation = false;
let pendingLocalRoom = null;
let revealRoundId = null;
let revealTimer = null;
let lastScreenshotNotice = 0;
let lastRenderedChatSignature = "";
let spinRequestInFlight = false;
let mediaRecorder = null;
let recorderStream = null;
let recorderChunks = [];
let isRecording = false;
let recordedClip = null;
let customPromptDraft = "";
let customPromptRoundId = "";
let soundEnabled = false;
let soundPanelOpen = false;
let fallbackAudioContext = null;
let fallbackGain = null;
let fallbackOscA = null;
let fallbackOscB = null;
let ambientPlaylistOrder = [];
let ambientPlaylistIndex = 0;
let ambientLoadFailuresInRow = 0;
let soundAutoHideTimer = null;

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing app...");
  initAmbientAudio();
  
  // Preload zodiac images to prevent flickering
  preloadZodiacImages();
  renderSignOptions();
  renderZodiacGrid();
  renderSelectedSign();
  restoreSession();

  elements.enterButton.addEventListener("click", () => showScreen("profile-screen"));
  
  // Debug: Check if createRoomButton exists
  console.log("createRoomButton element:", elements.createRoomButton);

  if (elements.createRoomButton) {
    elements.createRoomButton.addEventListener("click", () => {
      console.log("Create button clicked - navigating to options screen");
      showScreen("room-options-screen");
      renderRoomOptionsPlayer();
    });
  } else {
    console.error("createRoomButton not found!");
  }

  // Handle room option selections
  if (elements.createNormalRoom) {
    elements.createNormalRoom.addEventListener("click", async () => {
      console.log("Normal room selected");
      state.gameMode = 'normal';
      try {
        const room = await api("/api/rooms", {
          method: "POST",
          body: { player: { ...playerPayload(), gameMode: "normal" } }
        });
        console.log("Normal room created:", room);
        enterRoom(room, "created");
      } catch (error) {
        console.error("Error creating normal room:", error);
      }
    });
  }

  if (elements.createHotRoom) {
    elements.createHotRoom.addEventListener("click", async () => {
      console.log("🔥 Hot room selected - MODE HOT ACTIVÉ");
      state.gameMode = 'hot';
      console.log("📊 state.gameMode défini à:", state.gameMode);
      try {
        const room = await api("/api/rooms", {
          method: "POST",
          body: { player: { ...playerPayload(), gameMode: "hot" } }
        });
        console.log("🏠 Hot room created:", room);
        enterRoom(room, "created");
      } catch (error) {
        console.error("❌ Error creating hot room:", error);
      }
    });
  }

  document.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.back));
  });

  elements.zodiacSelect.addEventListener("change", () => {
    state.selectedSign = signs.find((sign) => sign.id === elements.zodiacSelect.value) || signs[0];
    renderSelectedSign();
    renderZodiacGrid();
  });

  elements.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("📝 Soumission du formulaire de profil");
    
    const name = elements.nameInput.value.trim();
    const age = Number(elements.ageInput.value);
    
    console.log("👤 Données formulaire:", { name, age, selectedSign: state.selectedSign });
    
    if (!name) {
      console.log("❌ Nom manquant");
      elements.nameInput.setCustomValidity("Veuillez entrer un nom.");
      elements.nameInput.reportValidity();
      return;
    }
    
    if (age < 18) {
      console.log("❌ Âge invalide:", age);
      elements.ageInput.setCustomValidity("Ce jeu est reserve aux adultes.");
      elements.ageInput.reportValidity();
      return;
    }

    if (!state.selectedSign) {
      console.log("❌ Aucun signe sélectionné, utilisation du signe par défaut");
      state.selectedSign = signs[0];
    }

    // Réinitialiser les validations
    elements.nameInput.setCustomValidity("");
    elements.ageInput.setCustomValidity("");
    
    state.player = {
      id: state.player?.id || createToken(10),
      name: name,
      age: age,
      sign: state.selectedSign
    };
    state.roomId = null;
    
    console.log("✅ Joueur créé:", state.player);
    saveSession();
    renderChoice();
    showScreen("choice-screen");
  });

  elements.joinRoomForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const roomId = normalizeRoomId(elements.joinRoomId.value);
    if (!roomId) {
      elements.joinRoomId.setCustomValidity("Entrez un ID de salle valide.");
      elements.joinRoomId.reportValidity();
      return;
    }

    elements.joinRoomId.setCustomValidity("");
    await joinRoom(roomId, "joined");
  });

  elements.copyRoom.addEventListener("click", () => copyText(state.roomId, elements.copyRoom, "ID copie"));
  elements.spinButton.addEventListener("click", spinBottle);
  elements.spinRoomButton.addEventListener("click", spinBottle);
  elements.chatForm.addEventListener("submit", sendChatMessage);
  elements.chatFile.addEventListener("change", onMediaFileSelected);
  elements.chatRecordButton?.addEventListener("click", toggleAudioRecording);
  document.addEventListener("keydown", detectScreenshotKey);
});

async function joinRoom(roomId, mode = "joined") {
  console.log("🚪 joinRoom appelé avec roomId:", roomId, "mode:", mode);
  
  // FORCER l'utilisation du roomId entré, ignorer la session sauvegardée
  const room = await api(`/api/rooms/${roomId}/join`, {
    method: "POST",
    body: { player: playerPayload() }
  });
  
  console.log("✅ Room reçue de l'API:", room);
  enterRoom(room, mode);
}

function enterRoom(room, mode) {
  console.log("🏠 enterRoom appelé avec room.id:", room.id, "mode:", mode);
  state.roomId = room.id;
  state.room = room;
  console.log("💾 Sauvegarde de la session avec roomId:", state.roomId);
  saveSession();
  renderRoom(mode);
  startPolling();
  showScreen("room-screen");
}

async function spinBottle() {
  if (!state.roomId || !state.player || !state.room) {
    return;
  }
  if (spinRequestInFlight) {
    return;
  }
  if (state.room.round?.status === "pending") {
    elements.roomStatus.textContent = "Un tour est deja en cours.";
    return;
  }

  spinRequestInFlight = true;
  elements.spinRoomButton.disabled = true;
  elements.spinButton.disabled = true;
  elements.roomStatus.textContent = "La bouteille tourne...";
  startLocalSpin();

  try {
    const room = await api(`/api/rooms/${state.roomId}/spin`, {
      method: "POST",
      body: { playerId: state.player.id }
    });
    pendingLocalRoom = room;
    window.setTimeout(() => {
      state.room = pendingLocalRoom;
      pendingLocalRoom = null;
      renderLiveRoom(room, { forceReveal: true });
    }, 1700);
  } catch (error) {
    stopLocalSpin();
    elements.roomStatus.textContent = error?.message || "Impossible de lancer le spin.";
  } finally {
    spinRequestInFlight = false;
    updateSpinAvailability(state.room);
  }
}

async function sendChatMessage(event) {
  event.preventDefault();
  if (!state.roomId || !state.player) {
    return;
  }
  const file = elements.chatFile.files?.[0] || null;
  const text = elements.chatInput.value.trim();
  const activeRecordedClip = recordedClip;
  let payload = {
    playerId: state.player.id,
    type: "text",
    text,
    fileName: activeRecordedClip ? activeRecordedClip.fileName : file ? file.name : undefined
  };

  if (activeRecordedClip || file) {
    const media = activeRecordedClip ? activeRecordedClip.dataUrl : await readFileAsDataUrl(file);
    const mediaMime = activeRecordedClip ? activeRecordedClip.mimeType : file.type;
    const mediaName = activeRecordedClip ? activeRecordedClip.fileName : file.name;
    payload = {
      playerId: state.player.id,
      type: mediaType(mediaMime, mediaName),
      text,
      media,
      fileName: mediaName
    };
  }

  if (!payload.text && !payload.media) {
    return;
  }

  const room = await api(`/api/rooms/${state.roomId}/messages`, {
    method: "POST",
    body: payload
  });
  state.room = room;
  clearPendingMedia();
  elements.chatInput.value = "";
  renderLiveRoom(room);
}

async function detectScreenshotKey(event) {
  const looksLikeScreenshot = event.key === "PrintScreen" || ((event.ctrlKey || event.metaKey) && event.shiftKey && ["s", "S", "3", "4", "5"].includes(event.key));
  if (!looksLikeScreenshot || !state.roomId || !state.player || Date.now() - lastScreenshotNotice < 2500) {
    return;
  }

  lastScreenshotNotice = Date.now();
  try {
    const room = await api(`/api/rooms/${state.roomId}/messages`, {
      method: "POST",
      body: {
        playerId: state.player.id,
        type: "text",
        text: `${state.player.name} a fait une capture d'ecran.`
      }
    });
    state.room = room;
    renderLiveRoom(room);
  } catch {
    // Screenshot detection is best-effort only.
  }
}

async function vote(approved) {
  const room = await api(`/api/rooms/${state.roomId}/approve`, {
    method: "POST",
    body: { playerId: state.player.id, approved }
  });
  state.room = room;
  renderLiveRoom(room);
}

async function chooseRoundPrompt(mode, prompt = "") {
  if (mode === "custom") {
    customPromptDraft = String(prompt || "");
  }
  const room = await api(`/api/rooms/${state.roomId}/prompt`, {
    method: "POST",
    body: { playerId: state.player.id, mode, prompt }
  });
  customPromptDraft = "";
  customPromptRoundId = "";
  state.room = room;
  renderLiveRoom(room, { forceReveal: true });
}

function startPolling() {
  window.clearInterval(state.pollTimer);
  state.pollTimer = window.setInterval(syncRoom, 1000);
}

async function syncRoom() {
  if (!state.roomId) {
    return;
  }

  try {
    const room = await api(`/api/rooms/${state.roomId}`);
    state.room = room;
    renderLiveRoom(room);
  } catch {
    elements.roomStatus.textContent = "Connexion a la salle en attente...";
  }
}

function renderSignOptions() {
  elements.zodiacSelect.replaceChildren(
    ...signs.map((sign) => {
      const option = document.createElement("option");
      option.value = sign.id;
      option.textContent = sign.name;
      return option;
    })
  );
}

function renderZodiacGrid() {
  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  signs.forEach((sign) => {
    const button = document.createElement("button");
    button.className = `zodiac-card${sign.id === state.selectedSign.id ? " is-selected" : ""}`;
    button.type = "button";
    button.style.setProperty("--sign-a", sign.colors[0]);
    button.style.setProperty("--sign-b", sign.colors[1]);
    const imageName = sign.id === 'capricorne' ? 'capricorn' : 
                     sign.id === 'gemeaux' ? 'gemaux' : 
                     sign.id === 'poissons' ? 'poisson' : 
                     sign.id === 'sagittaire' ? 'sagitaire' : 
                     sign.id;
    
    // Create image with loading state
    const img = document.createElement("img");
    img.src = `assets/images/zodiac/${imageName}.jpeg`;
    img.alt = escapeHtml(sign.name);
    img.loading = "lazy";
    
    // Add loading state handling
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
    img.onload = () => { img.style.opacity = "1"; };
    img.onerror = () => { 
      img.style.opacity = "1";
      img.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' text-anchor='middle' dy='0.3em' fill='white'>${sign.glyph}</text></svg>`;
    };
    
    button.innerHTML = `
      <div class="zodiac-image" aria-hidden="true"></div>
      <div class="zodiac-info">
        <h3>${escapeHtml(sign.name)}</h3>
        <p class="zodiac-dates">${escapeHtml(sign.dates)}</p>
        <p>${escapeHtml(sign.description)}</p>
      </div>
    `;
    
    // Append image to its container
    button.querySelector('.zodiac-image').appendChild(img);
    
    button.addEventListener("click", () => {
      state.selectedSign = sign;
      elements.zodiacSelect.value = sign.id;
      renderSelectedSign();
      // Optimize: only update selection state, don't re-render entire grid
      document.querySelectorAll('.zodiac-card').forEach(card => {
        card.classList.remove('is-selected');
      });
      button.classList.add('is-selected');
    });
    
    fragment.appendChild(button);
  });
  
  // Replace all at once for better performance
  elements.zodiacGrid.replaceChildren(fragment);
}

function renderSelectedSign() {
  const sign = state.selectedSign;
  elements.selectedSign.style.setProperty("--sign-a", sign.colors[0]);
  elements.selectedSign.style.setProperty("--sign-b", sign.colors[1]);
  const imageName = sign.id === 'capricorne' ? 'capricorn' : 
                       sign.id === 'gemeaux' ? 'gemaux' : 
                       sign.id === 'poissons' ? 'poisson' : 
                       sign.id === 'sagittaire' ? 'sagitaire' : 
                       sign.id;
  
  // Create image with loading state
  const img = document.createElement("img");
  img.src = `assets/images/zodiac/${imageName}.jpeg`;
  img.alt = escapeHtml(sign.name);
  img.loading = "lazy";
  
  // Add loading state handling
  img.style.opacity = "0";
  img.style.transition = "opacity 0.3s ease";
  img.onload = () => { img.style.opacity = "1"; };
  img.onerror = () => { 
    img.style.opacity = "1";
    img.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' text-anchor='middle' dy='0.3em' fill='white'>${sign.glyph}</text></svg>`;
  };
  
  elements.selectedSign.innerHTML = `
    <div class="sign-preview">
      <div class="zodiac-image" aria-hidden="true"></div>
      <div>
        <h3>${escapeHtml(sign.name)}</h3>
        <p class="zodiac-dates">${escapeHtml(sign.dates)}</p>
        <p>${escapeHtml(sign.description)}</p>
      </div>
    </div>
  `;
  
  // Append image to its container
  elements.selectedSign.querySelector('.zodiac-image').appendChild(img);
}

function renderChoice() {
  const { player } = state;
  elements.choicePlayerLabel.textContent = `${player.name}, ${player.age} ans`;
  renderPlayerCard(elements.choicePlayerCard, player);
}

function renderRoomOptionsPlayer() {
  const { player } = state;
  renderPlayerCard(elements.roomOptionsPlayerCard, player);
}

function renderRoom(mode) {
  const { player } = state;
  elements.roomTitle.textContent = mode === "joined" ? "Vous avez rejoint la table." : "La table est prete.";
  elements.roomCode.textContent = state.roomId;
  elements.roomPlayerLabel.textContent = `${player.name}, ${player.age} ans`;
  renderLiveRoom(state.room);
}

function renderLiveRoom(room, options = {}) {
  if (!room) {
    return;
  }

  if (pendingLocalRoom && !options.forceReveal) {
    renderChat(room.messages || []);
    return;
  }

  const players = room.players || [];
  elements.roomCode.textContent = room.id;
  updateSpinAvailability(room);
  renderSeats(players, room.round);
  renderRound(room, players, options);
  renderPlayersPanel(players, room.currentTurnId, room.round);
  renderCompatibility(players);
  renderChat(room.messages || []);
}

function updateSpinAvailability(room) {
  if (!room) {
    elements.spinRoomButton.disabled = true;
    elements.spinButton.disabled = true;
    return;
  }

  const roundActive = room.round?.status === "pending" || room.round?.status === "choosing";
  const canSpin = !roundActive;

  elements.spinRoomButton.disabled = !canSpin;
  elements.spinButton.disabled = !canSpin;

  if (room.round?.status === "choosing") {
    elements.roomStatus.textContent = "Le joueur cible choisit la question.";
  } else if (room.round?.status === "pending") {
    elements.roomStatus.textContent = "Tour en cours: la table doit approuver ou penaliser.";
  } else {
    elements.roomStatus.textContent = "Vous pouvez spinner.";
  }
}

function checkDiscoveredMode(players) {
  // Check if any player has 3 or more penalties (discovered mode)
  players.forEach(player => {
    if (player.penalties >= 3) {
      console.log(`${player.name} is in discovered mode with ${player.penalties} penalties`);
      // You could add special UI effects or behaviors here for discovered mode
    }
  });
}

function renderSeats(players, round) {
  const count = Math.max(players.length, 1);
  elements.seats.replaceChildren(
    ...players.map((player, index) => {
      const angle = -90 + (360 / count) * index;
      const seat = document.createElement("div");
      seat.className = `seat${round?.targetId === player.id ? " is-target" : ""}`;
      seat.style.setProperty("--angle", `${angle}deg`);
      seat.style.setProperty("--sign-a", player.signColors?.[0] || "#ff477e");
      seat.style.setProperty("--sign-b", player.signColors?.[1] || "#7f4cff");
      seat.innerHTML = `
        <span>${escapeHtml(initials(player.name))}</span>
        <strong>${escapeHtml(player.name)}</strong>
        <small>${escapeHtml(player.signName || "")} - ${player.penalties || 0} penalite${player.penalties > 1 ? "s" : ""}</small>
      `;
      return seat;
    })
  );

  // Check for discovered mode (3 penalties)
  checkDiscoveredMode(players);

  if (round && round.id !== lastAnimatedRoundId) {
    lastAnimatedRoundId = round.id;
    stopLocalSpin();
    revealRoundId = null;
    window.clearTimeout(revealTimer);
    elements.spinButton.classList.remove("is-spinning");
    elements.spinButton.style.setProperty("--spin-duration", "1700ms");
    elements.spinButton.style.setProperty("--spin", `${round.rotation || 720}deg`);
    void elements.spinButton.offsetWidth;
    elements.spinButton.classList.add("is-spinning");
    revealTimer = window.setTimeout(() => {
      revealRoundId = round.id;
      renderLiveRoom(state.room, { forceReveal: true });
    }, 1700);
  }
}

function renderRound(room, players, options = {}) {
  const round = room.round;

  if (!round) {
    elements.promptCard.innerHTML = `
      <span>Premier tour</span>
      <p>Spin la bouteille. Elle choisira un joueur et tirera Action ou Verite.</p>
    `;
    elements.approvalPanel.replaceChildren();
    return;
  }

  const target = players.find((player) => player.id === round.targetId);
  // Améliorer la logique de révélation pour le mode hot
  const shouldReveal = options.forceReveal || 
                       revealRoundId === round.id || 
                       (state.gameMode === 'hot' && round.status === "pending") ||
                       (round.id === lastAnimatedRoundId && !elements.spinButton.classList.contains("is-spinning"));
  
  if (!shouldReveal && round.status === "pending") {
    elements.promptCard.classList.remove("is-petale", "is-epine");
    elements.promptCard.innerHTML = `
      <span>La bouteille tourne</span>
      <p>Le resultat arrive dans un instant pour toute la salle.</p>
    `;
    elements.approvalPanel.innerHTML = `
      <div>
        <strong>Spin en cours</strong>
        <p>Personne ne peut relancer tant que le resultat n'est pas revele.</p>
      </div>
    `;
    return;
  }

  const typeLabel = round.type === "petale" ? "Pétale - Vérité" : "Épine - Action";
  const isChoosing = round.status === "choosing";
  const resultLabel = round.status === "approved"
    ? "Approuve par la table"
    : round.status === "penalized"
      ? "Pénalité appliquée"
      : isChoosing
        ? "Choix de question en attente"
        : "En attente d'approbation";

  elements.promptCard.innerHTML = `
    <span>${escapeHtml(typeLabel)} - ${escapeHtml(target?.name || "Joueur")}</span>
    <p>${escapeHtml(round.prompt || "Le joueur cible choisit: question auto ou question personnalisee.")}</p>
  `;
  elements.promptCard.classList.toggle("is-petale", round.type === "petale");
  elements.promptCard.classList.toggle("is-epine", round.type === "epine");

  const hasVoted = Object.prototype.hasOwnProperty.call(round.votes || {}, state.player.id);
  const isTarget = round.targetId === state.player.id;
  const pending = round.status === "pending";

  if (isChoosing) {
    const remainingMs = Math.max(0, Number(round.chooseDeadlineAt || 0) - Date.now());
    const remainingSec = Math.ceil(remainingMs / 1000);
    if (customPromptRoundId !== round.id) {
      customPromptRoundId = round.id;
      customPromptDraft = "";
    }
    const activeElement = document.activeElement;
    const shouldRefocusInput = activeElement?.id === "custom-round-input";
    const previousSelectionStart = shouldRefocusInput ? activeElement.selectionStart : null;
    const previousSelectionEnd = shouldRefocusInput ? activeElement.selectionEnd : null;

    elements.approvalPanel.innerHTML = `
      <div>
        <strong>${escapeHtml(resultLabel)}</strong>
        <p>${isTarget
          ? `Choisissez une question auto ou ecrivez la votre (temps restant: ${remainingSec}s).`
          : `${escapeHtml(target?.name || "Le joueur cible")} est en train de choisir la question. Merci de patienter...`}</p>
      </div>
    `;
    if (isTarget) {
      const autoBtn = document.createElement("button");
      autoBtn.className = "secondary-button";
      autoBtn.type = "button";
      autoBtn.textContent = "Question auto";
      autoBtn.addEventListener("click", () => chooseRoundPrompt("auto"));

      const customWrap = document.createElement("div");
      customWrap.style.display = "flex";
      customWrap.style.gap = "8px";
      customWrap.style.flexWrap = "wrap";

      const customInput = document.createElement("input");
      customInput.type = "text";
      customInput.id = "custom-round-input";
      customInput.maxLength = 400;
      customInput.placeholder = "Ecrivez votre question...";
      customInput.style.minWidth = "220px";
      customInput.value = customPromptDraft;
      customInput.addEventListener("input", () => {
        customPromptDraft = customInput.value;
      });
      customInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          chooseRoundPrompt("custom", customInput.value);
        }
      });

      const customBtn = document.createElement("button");
      customBtn.className = "secondary-button";
      customBtn.type = "button";
      customBtn.textContent = "Valider ma question";
      customBtn.addEventListener("click", () => chooseRoundPrompt("custom", customInput.value));

      customWrap.append(customInput, customBtn);
      elements.approvalPanel.append(autoBtn, customWrap);

      if (shouldRefocusInput) {
        customInput.focus();
        if (typeof previousSelectionStart === "number" && typeof previousSelectionEnd === "number") {
          customInput.setSelectionRange(previousSelectionStart, previousSelectionEnd);
        }
      }
    }
    return;
  }

  elements.approvalPanel.innerHTML = `
    <div>
      <strong>${escapeHtml(resultLabel)}</strong>
      <p>${escapeHtml(target?.name || "Le joueur")} doit realiser son tour. Les autres valident ensuite.</p>
    </div>
  `;

  if (pending && !isTarget && !hasVoted) {
    const approve = document.createElement("button");
    approve.className = "secondary-button";
    approve.type = "button";
    approve.textContent = "Approuver";
    approve.addEventListener("click", () => vote(true));

    const reject = document.createElement("button");
    reject.className = "secondary-button danger-button";
    reject.type = "button";
    reject.textContent = "Penaliser";
    reject.addEventListener("click", () => vote(false));

    elements.approvalPanel.append(approve, reject);
  } else if (pending && isTarget) {
    const note = document.createElement("p");
    note.textContent = "C'est votre tour. Faites l'action ou dites la verite, puis laissez la table approuver.";
    elements.approvalPanel.append(note);
  } else if (pending && hasVoted) {
    const note = document.createElement("p");
    note.textContent = "Votre vote est enregistre. On attend les autres joueurs.";
    elements.approvalPanel.append(note);
  }
}

function startLocalSpin() {
  localSpinAnimation = true;
  elements.spinButton.classList.remove("is-spinning");
  elements.spinButton.classList.add("is-rolling");
}

function stopLocalSpin() {
  localSpinAnimation = false;
  elements.spinButton.classList.remove("is-rolling");
}

function renderChat(messages) {
  const signature = messages
    .map((message) => `${message.id || ""}:${message.createdAt || message.timestamp || ""}`)
    .join("|");
  if (signature === lastRenderedChatSignature) {
    return;
  }
  lastRenderedChatSignature = signature;

  const wasNearBottom = elements.chatMessages.scrollTop + elements.chatMessages.clientHeight >= elements.chatMessages.scrollHeight - 40;
  elements.chatMessages.replaceChildren(
    ...messages.map((message) => {
      const item = document.createElement("article");
      item.className = `chat-message${message.playerId === state.player?.id ? " is-mine" : ""}`;
      const media = renderMessageMedia(message);
      item.innerHTML = `
        <strong>${escapeHtml(message.playerName || "Joueur")}</strong>
        ${message.text ? `<p>${escapeHtml(message.text)}</p>` : ""}
        ${media}
      `;
      return item;
    })
  );
  if (wasNearBottom) {
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }
}

function onMediaFileSelected() {
  recordedClip = null;
  renderMediaPreview();
}

function renderMediaPreview() {
  const file = elements.chatFile.files?.[0] || null;
  const clip = recordedClip;
  const sourceFileName = clip ? clip.fileName : file?.name;
  const sourceType = clip ? mediaType(clip.mimeType, clip.fileName) : file ? mediaType(file.type, file.name) : "";
  elements.mediaPreview.replaceChildren();
  if (!file && !clip) {
    return;
  }

  const previewUrl = clip ? clip.dataUrl : URL.createObjectURL(file);
  const preview = document.createElement("div");
  preview.className = "preview-card";
  const kind = sourceType;
  const media = document.createElement(kind === "image" ? "img" : kind === "video" ? "video" : "audio");
  media.src = previewUrl;
  if (kind !== "image") {
    media.controls = true;
  }
  if (kind === "audio") {
    media.preload = "metadata";
  }

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "secondary-button";
  remove.textContent = "Retirer";
  remove.addEventListener("click", () => {
    clearPendingMedia();
  });

  const label = document.createElement("span");
  label.textContent = sourceFileName || "media";
  preview.append(media, label, remove);
  elements.mediaPreview.append(preview);
}

function renderMessageMedia(message) {
  if (!message.media) {
    return "";
  }
  const source = escapeHtml(message.media);
  const label = escapeHtml(message.fileName || "media");
  if (message.type === "image") {
    return `<img src="${source}" alt="${label}">`;
  }
  if (message.type === "video") {
    return `<video src="${source}" controls></video>`;
  }
  if (message.type === "audio") {
    return `<audio src="${source}" controls preload="metadata" playsinline></audio>`;
  }
  return "";
}

async function toggleAudioRecording() {
  if (isRecording) {
    mediaRecorder?.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    elements.roomStatus.textContent = "L'enregistrement audio n'est pas supporte sur cet appareil.";
    return;
  }
  try {
    recorderStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorderChunks = [];
    const mimeType = pickRecorderMimeType();
    mediaRecorder = mimeType ? new MediaRecorder(recorderStream, { mimeType }) : new MediaRecorder(recorderStream);
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size > 0) {
        recorderChunks.push(event.data);
      }
    });
    mediaRecorder.addEventListener("stop", async () => {
      const recordedMime = mediaRecorder.mimeType || mimeType || "audio/webm";
      const extension = extensionFromMime(recordedMime);
      const blob = new Blob(recorderChunks, { type: recordedMime });
      recordedClip = {
        dataUrl: await readBlobAsDataUrl(blob),
        fileName: `record-${Date.now()}.${extension}`,
        mimeType: recordedMime
      };
      elements.chatFile.value = "";
      renderMediaPreview();
      cleanupRecorder();
      updateRecordButtonUI(false);
      elements.roomStatus.textContent = "Audio enregistre. Appuyez sur envoyer.";
    });
    mediaRecorder.start();
    isRecording = true;
    updateRecordButtonUI(true);
    elements.roomStatus.textContent = "Enregistrement en cours...";
  } catch (error) {
    cleanupRecorder();
    updateRecordButtonUI(false);
    elements.roomStatus.textContent = "Micro refuse ou indisponible.";
  }
}

function clearPendingMedia() {
  recordedClip = null;
  elements.chatFile.value = "";
  elements.mediaPreview.replaceChildren();
}

function cleanupRecorder() {
  isRecording = false;
  if (recorderStream) {
    recorderStream.getTracks().forEach((track) => track.stop());
    recorderStream = null;
  }
  mediaRecorder = null;
  recorderChunks = [];
}

function updateRecordButtonUI(recording) {
  if (!elements.chatRecordButton) {
    return;
  }
  elements.chatRecordButton.textContent = recording ? "⏹️" : "🎙️";
  elements.chatRecordButton.classList.toggle("is-recording", recording);
  elements.chatRecordButton.title = recording ? "Stop enregistrement" : "Enregistrer un audio";
}

function pickRecorderMimeType() {
  const preferred = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus", "audio/ogg"];
  if (typeof MediaRecorder === "undefined" || typeof MediaRecorder.isTypeSupported !== "function") {
    return "";
  }
  return preferred.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function extensionFromMime(mimeType) {
  const normalized = String(mimeType || "").toLowerCase();
  if (normalized.includes("ogg")) return "ogg";
  if (normalized.includes("mpeg")) return "mp3";
  if (normalized.includes("wav")) return "wav";
  return "webm";
}

function readBlobAsDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

function renderPlayersPanel(players, currentTurnId, round) {
  elements.playersList.replaceChildren(
    ...players.map((player) => {
      const card = document.createElement("article");
      card.className = `mini-player${player.id === state.player?.id ? " is-you" : ""}`;
      card.style.setProperty("--sign-a", player.signColors?.[0] || "#ff477e");
      card.style.setProperty("--sign-b", player.signColors?.[1] || "#7f4cff");
      const turnText = player.id === state.player?.id ? "Vous" : "Partenaire";
      card.innerHTML = `
        <span class="mini-avatar">${escapeHtml(player.signGlyph || initials(player.name))}</span>
        <div>
          <strong>${escapeHtml(player.name)}</strong>
          <p>${escapeHtml(String(player.age))} ans - ${escapeHtml(player.signName || "")}</p>
          <small>${escapeHtml(turnText)} - ${player.penalties || 0} penalite${player.penalties > 1 ? "s" : ""}</small>
        </div>
      `;
      return card;
    })
  );
}

function renderCompatibility(players) {
  const others = players.filter((player) => player.id !== state.player?.id);
  if (!others.length) {
    elements.compatibilityList.innerHTML = `<p class="empty-note">La connexion astro apparaitra quand un autre joueur rejoint la salle.</p>`;
    return;
  }

  elements.compatibilityList.replaceChildren(
    ...others.map((player) => {
      const item = document.createElement("article");
      item.className = "compatibility-card";
      const reading = compatibilityReading(state.player.sign.id, player.signId);
      item.innerHTML = `
        <strong>${escapeHtml(state.player.sign.name)} + ${escapeHtml(player.signName || "")}</strong>
        <p>${escapeHtml(reading)}</p>
      `;
      return item;
    })
  );
}

function renderPlayerCard(target, player) {
  const sign = player.sign;
  target.style.setProperty("--sign-a", sign.colors[0]);
  target.style.setProperty("--sign-b", sign.colors[1]);
  const imageName = sign.id === 'capricorne' ? 'capricorn' : 
                       sign.id === 'gemeaux' ? 'gemaux' : 
                       sign.id === 'poissons' ? 'poisson' : 
                       sign.id;
  target.innerHTML = `
    <div class="player-image" aria-hidden="true">
      <img src="assets/images/zodiac/${imageName}.jpeg" alt="${escapeHtml(sign.name)}" loading="lazy">
    </div>
    <div>
      <p class="eyebrow">Profil joueur</p>
      <h3>${escapeHtml(player.name)}</h3>
      <p>${escapeHtml(String(player.age))} ans - ${escapeHtml(sign.name)}</p>
      <p class="zodiac-dates">${escapeHtml(sign.dates)}</p>
    </div>
    <p>${escapeHtml(sign.description)}</p>
  `;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === id);
  });
}

function initAmbientAudio() {
  if (!elements.ambientAudio || !elements.soundToggle) {
    return;
  }

  elements.ambientAudio.volume = 0.35;
  resetAmbientPlaylist();
  advanceAmbientTrack();

  const saved = localStorage.getItem(SOUND_PREF_KEY);
  soundEnabled = saved === "1";
  syncSoundUi();

  elements.soundToggle.addEventListener("click", async (event) => {
    event.stopPropagation();
    // 1 click: open panel + toggle sound immediately
    soundPanelOpen = true;
    scheduleSoundAutoHide();
    soundEnabled = !soundEnabled;
    localStorage.setItem(SOUND_PREF_KEY, soundEnabled ? "1" : "0");
    await applyAmbientPlayback();
    syncSoundUi();
  });

  elements.ambientAudio.addEventListener("ended", async () => {
    ambientLoadFailuresInRow = 0;
    if (advanceAmbientTrack()) {
      await applyAmbientPlayback();
    }
  });

  elements.ambientAudio.addEventListener("error", async () => {
    ambientLoadFailuresInRow += 1;
    if (ambientLoadFailuresInRow >= Math.max(AMBIENT_AUDIO_PLAYLIST.length, 1)) {
      startFallbackAmbient();
      return;
    }
    if (advanceAmbientTrack()) {
      await applyAmbientPlayback();
    } else {
      startFallbackAmbient();
    }
  });

  elements.ambientAudio.addEventListener("loadeddata", () => {
    ambientLoadFailuresInRow = 0;
    stopFallbackAmbient();
  });

  document.addEventListener("click", (event) => {
    if (!elements.soundToggle.contains(event.target)) {
      soundPanelOpen = false;
      clearSoundAutoHide();
      syncSoundUi();
    }
  });

  // Start closed in corner.
  soundPanelOpen = false;
  syncSoundUi();

  applyAmbientPlayback().catch(() => {
    soundEnabled = false;
    syncSoundUi();
  });
}

function scheduleSoundAutoHide() {
  clearSoundAutoHide();
  soundAutoHideTimer = window.setTimeout(() => {
    soundPanelOpen = false;
    syncSoundUi();
  }, 3000);
}

function clearSoundAutoHide() {
  if (soundAutoHideTimer) {
    window.clearTimeout(soundAutoHideTimer);
    soundAutoHideTimer = null;
  }
}

async function applyAmbientPlayback() {
  if (!elements.ambientAudio) {
    return;
  }
  if (!soundEnabled) {
    elements.ambientAudio.pause();
    stopFallbackAmbient();
    return;
  }
  try {
    if (!elements.ambientAudio.src && !advanceAmbientTrack()) {
      startFallbackAmbient();
      return;
    }
    await elements.ambientAudio.play();
    stopFallbackAmbient();
  } catch {
    // Browser may block autoplay until explicit user interaction.
  }
}

function syncSoundUi() {
  if (!elements.soundToggle) {
    return;
  }
  elements.soundToggle.classList.toggle("is-open", soundPanelOpen);
  elements.soundToggle.textContent = soundEnabled ? "🔊 Son ON" : "🔇 Son OFF";
  elements.soundToggle.classList.toggle("is-on", soundEnabled);
  elements.soundToggle.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
}

function startFallbackAmbient() {
  if (fallbackAudioContext) {
    return;
  }
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return;
  }
  fallbackAudioContext = new AudioCtx();
  fallbackGain = fallbackAudioContext.createGain();
  fallbackOscA = fallbackAudioContext.createOscillator();
  fallbackOscB = fallbackAudioContext.createOscillator();

  fallbackOscA.type = "sine";
  fallbackOscA.frequency.value = 174;
  fallbackOscB.type = "triangle";
  fallbackOscB.frequency.value = 261.6;

  fallbackGain.gain.value = 0.02;
  fallbackOscA.connect(fallbackGain);
  fallbackOscB.connect(fallbackGain);
  fallbackGain.connect(fallbackAudioContext.destination);
  fallbackOscA.start();
  fallbackOscB.start();
}

function stopFallbackAmbient() {
  if (!fallbackAudioContext) {
    return;
  }
  fallbackOscA?.stop();
  fallbackOscB?.stop();
  fallbackOscA?.disconnect();
  fallbackOscB?.disconnect();
  fallbackGain?.disconnect();
  fallbackAudioContext.close();
  fallbackAudioContext = null;
  fallbackGain = null;
  fallbackOscA = null;
  fallbackOscB = null;
}

function resetAmbientPlaylist() {
  ambientPlaylistOrder = shuffleArray(AMBIENT_AUDIO_PLAYLIST);
  ambientPlaylistIndex = 0;
  ambientLoadFailuresInRow = 0;
}

function advanceAmbientTrack() {
  if (!elements.ambientAudio || !AMBIENT_AUDIO_PLAYLIST.length) {
    return false;
  }
  if (!ambientPlaylistOrder.length || ambientPlaylistIndex >= ambientPlaylistOrder.length) {
    resetAmbientPlaylist();
  }
  const nextTrack = ambientPlaylistOrder[ambientPlaylistIndex];
  ambientPlaylistIndex += 1;
  if (!nextTrack) {
    return false;
  }
  elements.ambientAudio.src = nextTrack;
  return true;
}

function saveSession() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      player: state.player,
      selectedSignId: state.selectedSign.id,
      roomId: state.roomId
    })
  );
}

async function restoreSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved?.player) {
      return;
    }

    const sign = signs.find((entry) => entry.id === saved.selectedSignId || entry.id === saved.player.sign?.id) || signs[0];
    state.selectedSign = sign;
    state.player = { ...saved.player, sign };
    state.roomId = saved.roomId || null;

    elements.nameInput.value = state.player.name || "";
    elements.ageInput.value = state.player.age || "";
    elements.zodiacSelect.value = sign.id;
    renderSelectedSign();
    renderZodiacGrid();

    if (state.roomId) {
      await joinRoom(state.roomId, "joined");
    } else {
      renderChoice();
      showScreen("choice-screen");
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function playerPayload() {
  const sign = state.player.sign;
  return {
    id: state.player.id,
    name: state.player.name,
    age: state.player.age,
    signId: sign.id,
    signName: sign.name,
    signGlyph: sign.glyph,
    signColors: sign.colors
  };
}

// FONCTION API EXTERNE SUPPRIMÉE - PLUS D'APPELS RÉSEAU
// La fonction api() locale (plus haut dans le fichier) est maintenant utilisée exclusivement

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function mediaType(mimeType, fileName = "") {
  const safeMime = String(mimeType || "").toLowerCase();
  if (safeMime.startsWith("image/")) {
    return "image";
  }
  if (safeMime.startsWith("video/")) {
    return "video";
  }
  if (safeMime.startsWith("audio/")) {
    return "audio";
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

function compatibilityReading(mySignId, otherSignId) {
  const fire = ["belier", "lion", "sagittaire"];
  const earth = ["taureau", "vierge", "capricorne"];
  const air = ["gemeaux", "balance", "verseau"];
  const water = ["cancer", "scorpion", "poissons"];
  const groups = [fire, earth, air, water];
  const myGroup = groups.findIndex((group) => group.includes(mySignId));
  const otherGroup = groups.findIndex((group) => group.includes(otherSignId));

  if (mySignId === otherSignId) {
    return "Meme energie: ca peut etre tres complice, mais personne ne peut tricher longtemps.";
  }
  if (myGroup === otherGroup) {
    return "Connexion naturelle: vos rythmes se comprennent vite et les defis montent sans forcer.";
  }
  if ((myGroup === 0 && otherGroup === 2) || (myGroup === 2 && otherGroup === 0)) {
    return "Feu et air: beaucoup d'etincelles, parfait pour les actions spontanees.";
  }
  if ((myGroup === 1 && otherGroup === 3) || (myGroup === 3 && otherGroup === 1)) {
    return "Terre et eau: tension douce, confiance lente, verites plus profondes.";
  }
  return "Connexion contrastee: le jeu marche mieux si chacun ose dire son envie clairement.";
}

function createToken(length) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  // Ajouter timestamp pour garantir l'unicité complète
  const timestamp = Date.now().toString(36);
  const randomPart = Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  return timestamp + randomPart;
}

function normalizeRoomId(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "");
}

async function copyText(text, button, successLabel) {
  const originalLabel = button.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("input");
    input.value = text || "";
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  button.textContent = successLabel;
  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1400);
}

function initials(name) {
  return String(name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function preloadZodiacImages() {
  signs.forEach(sign => {
    const imageName = sign.id === 'capricorne' ? 'capricorn' : 
                     sign.id === 'gemeaux' ? 'gemaux' : 
                     sign.id === 'poissons' ? 'poisson' : 
                     sign.id === 'sagittaire' ? 'sagitaire' : 
                     sign.id;
    const img = new Image();
    img.src = `assets/images/zodiac/${imageName}.jpeg`;
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
