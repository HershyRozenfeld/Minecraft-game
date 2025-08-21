// === DOM ===
const mainEl = document.querySelector('main#game');
const toolButtons = document.querySelectorAll('.tool-btn');
const tileButtons = document.querySelectorAll('.tile-btn');

// === Current selection ===
let currentSelection = { type: null, value: null }; // {type: 'tool'|'tile', value: string}

// === Tool ↔ Tile rules ===
const toolsForTiles = {
  grass: ["shovel"],
  land:  ["shovel"],
  rock:  ["axeStones"],
  tree:  ["axe", "axeStones"],
  leaves:["scissors"],
};

// === Placeable tiles ===
const placeableTiles = ['grass', 'land', 'rock', 'leaves', 'tree'];

// === Harvestable tiles ===
const harvestableTiles = ['grass', 'land', 'rock', 'leaves', 'tree']; // bedrock intentionally excluded

// === Inventory counts ===
const inventoryCounts = { grass: 0, land: 0, rock: 0, leaves: 0, tree: 0 };

// === UI badges ===
// init badges with 0
tileButtons.forEach(btn => { btn.dataset.count = "0"; });

// update badge value for a tile
function updateBadge(tile) {
  const n = inventoryCounts[tile] || 0;
  const btn = document.querySelector(`.tile-btn[data-tile="${tile}"]`);
  if (btn) btn.dataset.count = String(n);
}

// === Selection helpers ===
function clearActiveButtons() {
  toolButtons.forEach(b => b.classList.remove('is-active'));
  tileButtons.forEach(b => b.classList.remove('is-active'));
}
function setCursorForTile(tileOrEmpty) {
  // remove only previous cursor-* classes, keep other classes on <main>
  [...mainEl.classList].forEach(cls => { if (cls.startsWith('cursor-')) mainEl.classList.remove(cls); });
  if (tileOrEmpty) mainEl.classList.add(`cursor-${tileOrEmpty}`);
}
function setSelection(type, value) {
  currentSelection = { type, value };
}

// === Event handlers ===
function handleToolButtonClick(btn) {
  clearActiveButtons();
  btn.classList.add('is-active');
  setSelection('tool', btn.dataset.tool);
  setCursorForTile(''); // tools don't set a tile cursor
}
function handleTileButtonClick(btn) {
  clearActiveButtons();
  btn.classList.add('is-active');
  const tile = btn.dataset.tile;
  setSelection('tile', tile);
  setCursorForTile(placeableTiles.includes(tile) ? tile : '');
}

// === Event binding ===
toolButtons.forEach(btn => btn.addEventListener('click', () => handleToolButtonClick(btn)));
tileButtons.forEach(btn => btn.addEventListener('click', () => handleTileButtonClick(btn)));

// === Sky cell (empty) ===
function createSkyCell() {
  const el = document.createElement('div');
  el.classList.add('sky', 'cell');
  el.addEventListener('click', () => {
    if (currentSelection.type !== 'tile') return;
    const tile = currentSelection.value;
    if (!placeableTiles.includes(tile)) return;
    if ((inventoryCounts[tile] || 0) <= 0) return;      // require inventory
    inventoryCounts[tile]--;
    updateBadge(tile);
    el.replaceWith(createTileCell(tile));
  });
  return el;
}

// === Solid tile cell ===
function createTileCell(type) {
  const el = document.createElement('div');
  el.classList.add(type, 'cell');
  el.addEventListener('click', () => {
    if (currentSelection.type !== 'tool') return;
    const tool = currentSelection.value;
    const validTools = toolsForTiles[type] || [];
    if (!harvestableTiles.includes(type)) return;       // prevent bedrock harvest
    if (!validTools.includes(tool)) return;             // tool must match rules
    inventoryCounts[type] = (inventoryCounts[type] || 0) + 1;
    updateBadge(type);
    el.replaceWith(createSkyCell());
  });
  return el;
}

// === World generation ===
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
        cell = createTileCell('bedrock'); // unbreakable
      }
      mainEl.appendChild(cell);
    }
  }
}

// === Helper: replace a cell by row/col ===
function placeAt(row, col, type) {
  const cols = 99;
  const index = (row - 1) * cols + (col - 1);
  const oldCell = mainEl.children[index];
  if (!oldCell) return;
  oldCell.replaceWith(createTileCell(type));
}

// === Helper: draw a tree ===
function drawTree(baseRow, baseCol) {
  // trunk: 4 cells
  for (let i = 0; i < 4; i++) {
    placeAt(baseRow - i, baseCol, "tree");
  }
  // leaves above trunk
  let topRow = baseRow - 4;
  for (let c = baseCol - 1; c <= baseCol + 1; c++) placeAt(topRow, c, "leaves");
  for (let c = baseCol - 2; c <= baseCol + 2; c++) placeAt(topRow - 1, c, "leaves");
  for (let c = baseCol - 2; c <= baseCol + 2; c++) placeAt(topRow - 2, c, "leaves");
  for (let c = baseCol - 1; c <= baseCol + 1; c++) placeAt(topRow - 3, c, "leaves");
}

// === Boot ===
generateWorld();
drawTree(11, 20); 
drawTree(10, 26); 

drawTree(11, 50);
drawTree(10, 56);

