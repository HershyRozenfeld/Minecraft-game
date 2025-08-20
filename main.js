const body = document.querySelector("body");
let currentTile = "";
const packege = {
    land: 0,
    rock: 0
};

function createSky() {
    const sky = document.createElement("div");
    sky.classList = "sky";
    sky.addEventListener('click', () => {
        if (currentTile === "land" && packege.land > 0) {
            sky.replaceWith(createTile('land'));
            packege.land--;
        }
        else if (currentTile === "rock" && packege.rock > 0) {
            sky.replaceWith(createTile('rock'));
            packege.rock--;
        }
    })
    return sky;
}

function createTile(type) {
    const land = document.createElement("div");
    land.classList = type;
    land.addEventListener('click', () => {
        land.replaceWith(createSky());
        packege[type]++;
        currentTile = type;
        console.log(packege);

    })
    return land;
}

function init() {
    for (let i = 0; i < 500; i++) {
        const sky = createSky();
        body.appendChild(sky);
    }

    for (let i = 0; i < 250; i++) {
        const land = createTile('land');
        body.appendChild(land)
    }

    for (let i = 0; i < 1000; i++) {
        const rock = createTile('rock');
        body.appendChild(rock);
    }
}

init();