// Seleção de elementos
const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("dialog");
const closeModalButton = document.querySelector("#close-modal");

// Eventos
openModalButton.onclick = () => {
    modal.showModal();
}

closeModalButton.onclick = () => {
    modal.close();
}