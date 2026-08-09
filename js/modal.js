/* =========================
   MODALS
========================= */

const overlay =
  document.getElementById("overlay");

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalBody =
  document.getElementById("modalBody");

const restoreSectionButton =
  document.getElementById("restoreSection");


let modalState =
  "normal";


function openModal(id){

  const item =
    data[id];

  if(!item)
    return;


  modalTitle.textContent =
    item.title;

  modalBody.innerHTML =
    item.html;


  modal.classList.remove(
    "window-minimized",
    "window-maximized"
  );


  overlay.classList.add(
    "show"
  );


  modalState =
    "normal";


  restoreSectionButton.style.display =
    "none";

}


function closeModal(){

  modal.classList.remove(
    "window-minimized",
    "window-maximized"
  );

  overlay.classList.remove(
    "show"
  );

  modalState =
    "normal";

  restoreSectionButton.style.display =
    "none";

}


function minimizeModal(){

  if(
    modalState === "minimized"
  ){

    restoreModal();

    return;

  }


  modal.classList.remove(
    "window-maximized"
  );

  modal.classList.add(
    "window-minimized"
  );


  overlay.classList.remove(
    "show"
  );


  modalState =
    "minimized";


  document.getElementById(
    "restoreSectionName"
  ).textContent =
    modalTitle.textContent;


  restoreSectionButton.style.display =
    "flex";

}


function maximizeModal(){

  if(
    modalState === "maximized"
  ){

    modal.classList.remove(
      "window-maximized"
    );

    modalState =
      "normal";

    return;

  }


  modal.classList.remove(
    "window-minimized"
  );

  overlay.classList.add(
    "show"
  );

  modal.classList.add(
    "window-maximized"
  );

  modalState =
    "maximized";

}


function restoreModal(){

  modal.classList.remove(
    "window-minimized",
    "window-maximized"
  );

  overlay.classList.add(
    "show"
  );

  modalState =
    "normal";

  restoreSectionButton.style.display =
    "none";

}