/* =========================
   ADDITIVE TERMINAL ENHANCEMENTS
========================= */

(() => {

  const input = document.getElementById("commandInput");
  const ghost = document.querySelector(".command-ghost");

  if (!input || !ghost) return;

  const suggestions = [
    "help",
    "whoami",
    "about",
    "profiles",
    "connect",
    "projects",
    "skills",
    "github",
    "resume",
    "clear"
  ];

  function updateGhost(){

    const value = input.value.trim().toLowerCase();
    ghost.textContent = "";

    if (!value) return;

    const match = suggestions.find(command =>
      command.startsWith(value) && command !== value
    );

    if (!match) return;

    ghost.textContent = match;

  }

  input.addEventListener("input", updateGhost);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === "Escape") {
      ghost.textContent = "";
    }
  });

})();
