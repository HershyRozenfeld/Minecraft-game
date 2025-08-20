const main = document.querySelector("main");
const header = document.querySelector('header');
const shovel = document.getElementsByClassName("shovel")[0];
const pickaxe = document.getElementsByClassName("pickaxe")[0];

let currentTool = "";
let currentTile = "";

const tools = {
    land: "shovel",
    grass: "shovel",
    rock: "pickaxe"
}

const packege = {
    grass: 0,
    land: 0,
    rock: 0
};

shovel.addEventListener('click', () => {
    currentTool = "shovel";
})

pickaxe.addEventListener('click', () => {
    currentTool = "pickaxe";
})


function createSky() {
    const sky = document.createElement("div");
    sky.classList = "sky";
    sky.addEventListener('click', () => {
        if (currentTile === "land" && packege.land > 0) {
            sky.replaceWith(createTile('land'));
            removeTile("land");
        }
        else if (currentTile === "rock" && packege.rock > 0) {
            sky.replaceWith(createTile('rock'));
            removeTile("rock");
        }
        else if (currentTile === "grass" && packege.grass > 0) {
            sky.replaceWith(createTile('grass'));
            removeTile("grass");
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
        if (currentTool === tools[type]) {
            tile.replaceWith(createSky());
            packege[type]++;
            const currentPackage = document.querySelector(`.package > .${type}`);
            currentPackage.style.display = "inline";
            currentPackage.textContent = packege[type];
            currentTile = type;
        }
    })
    return tile;
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