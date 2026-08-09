/* =========================
   NAVIGATION
========================= */

document
  .querySelectorAll("[data-nav]")
  .forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        event.stopPropagation();

        openModal(
          button.dataset.nav
        );

      }
    );

  });


/* =========================
   OVERLAY
========================= */

overlay.addEventListener(
  "click",
  event => {

    if(
      event.target === overlay
    ){

      closeModal();

    }

  }
);