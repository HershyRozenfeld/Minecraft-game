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
        }
        else if (tool.classList.contains("pickaxe")) {
            currentItem = "pickaxe";
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


function init() {
    for (let i = 0; i < 500; i++) {
        const sky = createSky();
        main.appendChild(sky);
    }

    for (let i = 0; i < 50; i++) {
        const grass = createTile("grass");
        main.appendChild(grass);
    }

    for (let i = 0; i < 250; i++) {
        const land = createTile('land');
        main.appendChild(land)
    }

    for (let i = 0; i < 1000; i++) {
        const rock = createTile('rock');
        main.appendChild(rock);
    }
}

init();