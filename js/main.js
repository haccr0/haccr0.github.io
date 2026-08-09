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

/* =========================
   GITHUB ACTIVITY
========================= */

async function loadGithubStats(){

  const target =
    document.getElementById("githubStats");

  if(!target)
    return;

  try{

    const response = await fetch(
      "https://api.github.com/users/haccr0",
      { cache:"no-store" }
    );

    if(!response.ok)
      throw new Error("GitHub unavailable");

    const profile =
      await response.json();

    target.innerHTML = `

      <div>
        <small>PUBLIC REPOS</small>
        <strong>${profile.public_repos}</strong>
      </div>

      <div>
        <small>FOLLOWERS</small>
        <strong>${profile.followers}</strong>
      </div>

      <div>
        <small>FOLLOWING</small>
        <strong>${profile.following}</strong>
      </div>

      <div>
        <small>PROFILE</small>
        <strong><a href="${profile.html_url}" target="_blank" rel="noopener">@${profile.login} ↗</a></strong>
      </div>

    `;

  }catch(error){

    target.innerHTML = `
      <div>
        <small>GITHUB</small>
        <strong>Activity unavailable</strong>
      </div>
    `;

  }

}


window.addEventListener("load", loadGithubStats);
