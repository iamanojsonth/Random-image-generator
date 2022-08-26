const imgcontainerEL = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImages();
})

function addNewImages() {
    for (let index = 0; index < 4; index++) {
        const newEl = document.createElement("img");
    newEl.src = `https://picsum.photos/300?random=${Math.ceil(Math.random()*10000)}`;
    imgcontainerEL.appendChild(newEl);
    }
    
}