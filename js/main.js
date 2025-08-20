const main = document.querySelector("main");
const header = document.querySelector('header');
const tools = document.querySelectorAll(".tools > div");
const packageTiles = document.querySelectorAll(".package > div");
const tiles = ["land", "rock", "grass"];
let currentItem = "";

const toolsForTiles = {
  land: "shovel",
  grass: "shovel",
  rock: "pickaxe"
}

const packageNumber = {
  grass: 0,
  land: 0,
  rock: 0
};

for (const tool of tools) {
  tool.addEventListener('click', () => {
    if (tool.classList.contains("shovel")) {
      currentItem = "shovel";
      setCursor("shovel")
    }
    else if (tool.classList.contains("pickaxe")) {
      currentItem = "pickaxe";
      setCursor("shovel")
    }
  })
}

for (const tile of packageTiles) {
  tile.addEventListener("click", () => {
    if (tile.classList.contains("grass")) {
      currentItem = "grass";
      setCursor("grass")
    } else if (tile.classList.contains("land")) {
      currentItem = "land";
      setCursor("land")
    } else if (tile.classList.contains("rock")) {
      setCursor("rock");
      currentItem = "rock";
    }
  });
}



function createSky() {
  const sky = document.createElement("div");
  sky.classList = "sky";
  sky.addEventListener('click', () => {
    if (tiles.includes(currentItem) && packageNumber[currentItem] > 0) {
      sky.replaceWith(createTile(currentItem));
      packageNumber[currentItem]--;
      const currentPackage = document.querySelector(`.package > .${currentItem}`);
      currentPackage.textContent = packageNumber[currentItem];
      if (packageNumber[currentItem] === 0) {
        setCursor("");
        currentPackage.style.display = "none";
      }
    }
  })
  return sky;
}

function removeTile(type) {
  packege[type]--;
  const currentPackage = document.querySelector(`.package > .${type}`);
  currentPackage.textContent = packege[type];
  if (packege[type] === 0) {
    currentPackage.style.display = "none";
  }
}

function createTile(type) {
  const tile = document.createElement("div");
  tile.classList = type;
  tile.addEventListener('click', () => {
    if (currentItem === toolsForTiles[type]) {
      tile.replaceWith(createSky());
      packageNumber[type]++;
      const currentPackage = document.querySelector(`.package > .${type}`);
      currentPackage.style.display = "inline";
      currentPackage.textContent = packageNumber[type];
    }
  })
  return tile;
}

function setCursor(item) {
  main.className = "";
  main.classList.add(`cursor-${item}`);
}

function generateHtml() {
  const rows = 30;
  const cols = 99;
  let cell;

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {

      if (r <= 10) {
        cell = createSky();
      } else if (r === 11) {
        cell = createTile('grass');
      } else if (r > 11 && r < 16) {
        cell = createTile('land');
      } else if (r >= 16 && r <= 28) {
        cell = createTile('rock');
      } else {
        cell = createTile('bedrock')
      }
      cell.classList.add("cell");

      main.appendChild(cell);
    }
  }
}

generateHtml()