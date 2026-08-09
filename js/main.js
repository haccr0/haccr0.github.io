/* =========================
   ESCAPE
========================= */

document.addEventListener(
  "keydown",
  event => {

    if(
      event.key === "Escape"
    ){

      closeModal();

      closeOutput();

    }


    if(
      (event.metaKey ||
       event.ctrlKey) &&
      event.key.toLowerCase() === "k"
    ){

      event.preventDefault();

      if(
        terminalState !== "normal"
      ){

        restoreTerminal();

      }

      input.focus();

    }

  }
);


/* =========================
   CLOCK
========================= */

function updateClock(){

  const clock =
    document.getElementById(
      "clock"
    );


  if(clock){

    clock.textContent =
      new Date().toLocaleTimeString(
        [],
        {
          hour:"2-digit",
          minute:"2-digit"
        }
      );

  }

}


updateClock();

setInterval(
  updateClock,
  1000
);


/* =========================
   INITIAL FOCUS
========================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      focusTerminal,
      250
    );

  }
);