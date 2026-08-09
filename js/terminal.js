/* =========================
   ELEMENTS
========================= */

const terminal =
  document.getElementById("terminal");

const input =
  document.getElementById("commandInput");

const output =
  document.getElementById("commandOutput");

const outputContent =
  document.getElementById("outputContent");

const restoreTerminalButton =
  document.getElementById("restoreTerminal");


let terminalState =
  "normal";

let history =
  [];

let historyIndex =
  0;


/* =========================
   TERMINAL
========================= */

function focusTerminal(){

  if(
    terminalState === "normal" ||
    terminalState === "maximized"
  ){

    input.focus();

  }

}


function restoreTerminal(){

  terminal.classList.remove(
    "window-closed",
    "window-minimized",
    "window-maximized"
  );

  terminal.style.display = "";

  terminalState =
    "normal";

  restoreTerminalButton.style.display =
    "none";

  requestAnimationFrame(() => {

    setTimeout(() => {

      focusTerminal();

    },50);

  });

}


function closeTerminal(){

  terminal.classList.remove(
    "window-minimized",
    "window-maximized"
  );

  terminal.classList.add(
    "window-closed"
  );

  terminalState =
    "closed";

  restoreTerminalButton.style.display =
    "flex";

}


function minimizeTerminal(){

  if(
    terminalState === "minimized"
  ){

    restoreTerminal();

    return;

  }


  if(
    terminalState === "closed"
  ){

    restoreTerminal();

    return;

  }


  if(
    terminalState === "maximized"
  ){

    terminal.classList.remove(
      "window-maximized"
    );

    void terminal.offsetHeight;

  }


  terminal.classList.add(
    "window-minimized"
  );

  terminalState =
    "minimized";

  restoreTerminalButton.style.display =
    "flex";

}


function maximizeTerminal(){

  if(
    terminalState === "closed"
  ){

    restoreTerminal();

    setTimeout(() => {

      maximizeTerminal();

    },80);

    return;

  }


  if(
    terminalState === "minimized"
  ){

    terminal.classList.remove(
      "window-minimized"
    );

    void terminal.offsetHeight;

    terminal.classList.add(
      "window-maximized"
    );

    terminalState =
      "maximized";

    restoreTerminalButton.style.display =
      "none";

    setTimeout(() => {

      focusTerminal();

    },60);

    return;

  }


  if(
    terminalState === "maximized"
  ){

    terminal.classList.remove(
      "window-maximized"
    );

    terminalState =
      "normal";

    setTimeout(() => {

      focusTerminal();

    },60);

    return;

  }


  terminal.classList.add(
    "window-maximized"
  );

  terminalState =
    "maximized";

  restoreTerminalButton.style.display =
    "none";

  setTimeout(() => {

    focusTerminal();

  },60);

}


/* =========================
   COMMAND OUTPUT
========================= */

function openOutput(html){

  outputContent.innerHTML =
    html;

  output.classList.add(
    "show"
  );

  input.blur();

}


function closeOutput(){

  output.classList.remove(
    "show"
  );

  input.focus();

}


/* =========================
   ESCAPE HTML
========================= */

function escapeHtml(value){

  return value.replace(
    /[&<>"']/g,
    char => ({

      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"

    }[char])
  );

}


/* =========================
   RUN COMMAND
========================= */

function runCommand(raw){

  const command =
    raw.trim().toLowerCase();


  if(!command)
    return;


  if(
    history[history.length - 1]
    !== command
  ){

    history.push(command);

  }


  historyIndex =
    history.length;


  if(
    command === "clear"
  ){

    closeOutput();

    return;

  }


  if(
    command === "about" ||
    command === "profiles" ||
    command === "connect" ||
    command === "projects" ||
    command === "skills" ||
    command === "resume" ||
    command === "github"
  ){

    openModal(command);

    return;

  }


  if(command === "visitors"){

    showVisitors();

    return;

  }


  if(
    command === "ls" ||
    command === "projects" ||
    command === "neofetch"
  ){

    openOutput(`

      <p>

        <span style="color:var(--green)">
          zsh: command not found:
        </span>

        ${escapeHtml(command)}

      </p>

    `);

    return;

  }


  if(
    commands[command]
  ){

    openOutput(
      commands[command]
    );

    return;

  }


  if(
    command === "sudo hire shon"
  ){

    openOutput(`

      <div class="prompt">
        shon@portfolio ~ % sudo hire shon
      </div>

      <h2>
        Permission granted.
      </h2>

      <p>
        Good decision.
      </p>

    `);

    return;

  }


  openOutput(`

    <p>

      <span style="color:var(--green)">
        zsh: command not found:
      </span>

      ${escapeHtml(command)}

      <br>

      Type <b>help</b> for available commands.

    </p>

  `);

}


/* =========================
   TERMINAL KEYBOARD
========================= */

input.addEventListener(
  "keydown",
  event => {

    event.stopPropagation();


    if(
      event.key === "Enter"
    ){

      runCommand(
        input.value
      );

      input.value = "";

      return;

    }


    if(
      event.key === "ArrowUp"
    ){

      event.preventDefault();

      if(!history.length)
        return;

      historyIndex =
        Math.max(
          0,
          historyIndex - 1
        );

      input.value =
        history[historyIndex] || "";

      return;

    }


    if(
      event.key === "ArrowDown"
    ){

      event.preventDefault();

      if(!history.length)
        return;

      historyIndex =
        Math.min(
          history.length,
          historyIndex + 1
        );

      input.value =
        history[historyIndex] || "";

      return;

    }


    if(
      event.key === "Escape"
    ){

      closeOutput();

    }

  }
);


/* =========================
   TERMINAL FOCUS
========================= */

terminal.addEventListener(
  "mousedown",
  () => {

    if(
      terminalState === "normal" ||
      terminalState === "maximized"
    ){

      input.focus();

    }

  }
);