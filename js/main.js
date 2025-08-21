// ====== DOM ======
const mainEl = document.querySelector('main#game');
const toolButtons = document.querySelectorAll('.tool-btn');
const tileButtons = document.querySelectorAll('.tile-btn');

// ====== מצב נוכחי ======
let currentSelection = { type: null, value: null }; // {type: 'tool'|'tile', value: string}

// ====== מיפויים ======
const toolsForTiles = {
  grass: ['shovel'],
  land: ['shovel'],
  rock: ['axe', 'axeStones'],
  leaves: ['scissors'],
  tree: ['axe', 'axeStones'],
};

const placeableTiles = ['grass', 'land', 'rock', 'leaves', 'tree'];
const harvestableTiles = ['grass', 'land', 'rock', 'leaves', 'tree'];

const inventoryCounts = {
  grass: 0,
  land: 0,
  rock: 0,
  leaves: 0,
  tree: 0,
};

// ====== עזר UI – תגיות כמות ======
const badgeByTile = {};
tileButtons.forEach(btn => {
  const tile = btn.dataset.tile;
  const badge = document.createElement('span');
  badge.style.position = 'absolute';
  badge.style.bottom = '-6px';
  badge.style.right = '-6px';
  badge.style.minWidth = '20px';
  badge.style.height = '20px';
  badge.style.padding = '0 6px';
  badge.style.borderRadius = '999px';
  badge.style.border = '1px solid rgba(255,255,255,0.6)';
  badge.style.background = 'rgba(0,0,0,0.55)';
  badge.style.color = '#fff';
  badge.style.fontSize = '12px';
  badge.style.lineHeight = '20px';
  badge.style.textAlign = 'center';
  badge.style.transform = 'translate(0, 0)';
  badge.textContent = '0';
  badge.hidden = true;

  btn.style.position = 'relative';
  btn.appendChild(badge);
  badgeByTile[tile] = badge;
});

function updateBadge(tile) {
  const badge = badgeByTile[tile];
  if (!badge) return;
  const n = inventoryCounts[tile] || 0;
  badge.textContent = String(n);
  badge.hidden = n <= 0;
}

// ====== בחירת כפתורים ======
function clearActiveButtons() {
  toolButtons.forEach(b => b.classList.remove('is-active'));
  tileButtons.forEach(b => b.classList.remove('is-active'));
}
function setCursorForTile(tileOrEmpty) {
  mainEl.className = ''; 
  if (tileOrEmpty) mainEl.classList.add(`cursor-${tileOrEmpty}`);
}

toolButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    clearActiveButtons();
    btn.classList.add('is-active');
    currentSelection = { type: 'tool', value: btn.dataset.tool };
    setCursorForTile(''); 
  });
});

tileButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    clearActiveButtons();
    btn.classList.add('is-active');
    const tile = btn.dataset.tile;
    currentSelection = { type: 'tile', value: tile };
    // קורסור מותאם לאריחים (יש לך תמונות ל-grass/land/rock)
    setCursorForTile(placeableTiles.includes(tile) ? tile : '');
  });
});

// ====== בניית תאים ======
function createSkyCell() {
  const el = document.createElement('div');
  el.classList.add('sky', 'cell');

  el.addEventListener('click', () => {
    if (currentSelection.type === 'tile') {
      const tile = currentSelection.value;
      if (!placeableTiles.includes(tile)) return;

      // אפשר להניח רק אם יש במלאי
      if ((inventoryCounts[tile] || 0) > 0) {
        inventoryCounts[tile]--;
        updateBadge(tile);
        el.replaceWith(createTileCell(tile));
      }
    }
  });

  return el;
}

function createTileCell(type) {
  const el = document.createElement('div');
  el.classList.add(type, 'cell');

  el.addEventListener('click', () => {
    if (currentSelection.type === 'tool') {
      const tool = currentSelection.value;
      const validTools = toolsForTiles[type] || [];
      if (validTools.includes(tool) && harvestableTiles.includes(type)) {
        // חציבה/חפירה -> הופך לשמיים ומוסיף למלאי
        inventoryCounts[type] = (inventoryCounts[type] || 0) + 1;
        updateBadge(type);
        el.replaceWith(createSkyCell());
      }
    }
  });

  return el;
}

// ====== יצירת הגריד הראשוני ======
function generateWorld() {
  const rows = 30;
  const cols = 99;

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      let cell;
      if (r <= 10) {
        cell = createSkyCell();
      } else if (r === 11) {
        cell = createTileCell('grass');
      } else if (r > 11 && r < 16) {
        cell = createTileCell('land');
      } else if (r >= 16 && r <= 28) {
        cell = createTileCell('rock');
      } else {
        cell = createTileCell('bedrock'); // לא ניתן לחציבה
      }
      mainEl.appendChild(cell);
    }
  }
}

generateWorld();
