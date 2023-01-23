const botaoTrailer = document.querySelector('.button');
const modal = document.querySelector('.modal');
const botaoX = document.querySelector('.close-modal');
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

botaoX.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})





