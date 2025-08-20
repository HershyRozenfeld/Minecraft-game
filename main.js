const body = document.querySelector("body");
let currentTile = "";
const packege = {
    land: 0,
    rock: 0
};

for (let i = 0; i < 500; i++) {
    const sky = document.createElement("div");
    sky.classList = "sky";
    sky.addEventListener('click', () => {
        if (currentTile === "land" && packege.land > 0) {
            sky.classList = "land";
            packege.land--;
        }
        else if (currentTile === "rock" && packege.rock > 0) {
            sky.classList = "rock";
            packege.rock--;
        }
    })
    body.appendChild(sky);
}

for (let i = 0; i < 250; i++) {
    const land = document.createElement("div");
    land.classList = "land";
    land.addEventListener('click', () => {
        if (land.classList.contains("land")) {
            land.classList = 'sky';
            packege.land++;
            currentTile = "land";
            console.log(packege);
        }
    })
    body.appendChild(land)
}

for (let i = 0; i < 1000; i++) {
    const rock = document.createElement("div");
    rock.classList = "rock";
    rock.addEventListener('click', () => {
        if (rock.classList.contains("rock")) {
            rock.classList = 'sky'
            packege.rock++;
            currentTile = "rock";
            console.log(packege);
        }
    })
    body.appendChild(rock);
}

