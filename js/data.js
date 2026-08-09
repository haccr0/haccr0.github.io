/* =========================
   BASIC DATA
========================= */

const EMAIL =
  "shonsanthosh00@gmail.com";


const data = {

  about:{

    title:"about",

    html:`

      <div class="prompt">
        shon@portfolio ~ % cat about.txt
      </div>

      <div class="about-photo">

        <img
          src="https://avatars.githubusercontent.com/u/296903246?v=4"
          alt="Shon Santhosh"
        >

      </div>

      <h2>
        About.
      </h2>

      <p>

I’m Shon Santhosh, a Computer Science student passionate about coding, artificial intelligence, and building things that solve real problems. I’m currently strengthening my programming foundations while exploring AI, automation, and intelligent systems. I enjoy learning by creating projects, experimenting with new technologies, and constantly pushing myself to become a better developer.

If you want it to feel more unique and less like a typical student portfolio, I can also make it more bold/creative.
      </p>

      <div class="data-grid">

        <div>
          <small>INTERESTED IN</small>
          <span>AI · ML · Building</span>
        </div>

        <div>
          <small>CURRENTLY</small>
          <span>Bachelor in AI</span>
        </div>

        <div>
          <small>LEARNING</small>
          <span>Python</span>
        </div>

        <div>
          <small>STATUS</small>
          <span>Always learning</span>
        </div>

      </div>

    `
  },


  profiles:{

    title:"profiles",

    html:`

      <div class="prompt">
        shon@portfolio ~ % profiles
      </div>

      <h2>
        Profiles.
      </h2>

      <div class="profile-list">

        <a
          href="https://github.com/haccr0"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <span>↗</span>
        </a>

        <a
          href="https://discord.com/users/1520684805413535844"
          target="_blank"
          rel="noopener"
        >
          Discord
          <span>↗</span>
        </a>

        <a
          href="https://instagram.com/_.shhonn"
          target="_blank"
          rel="noopener"
        >
          Instagram
          <span>↗</span>
        </a>

      </div>

    `
  },


  connect:{

    title:"connect",

    html:`

      <div class="prompt">
        shon@portfolio ~ % ./connect
      </div>

      <h2>
        Let's talk.
      </h2>

      <p>
        Have an idea, question or just want to say hello?
      </p>

      <a
        class="contact-email"
        href="mailto:${EMAIL}"
      >
        ${EMAIL} ↗
      </a>

    `
  }

};


/* =========================
   TERMINAL COMMANDS
========================= */

const commands = {

  help:`

    <h2>
      Commands.
    </h2>

    <p>

      <b>whoami</b> — my identity<br>

      <b>about</b> — learn about me<br>

      <b>profiles</b> — find me online<br>

      <b>connect</b> — get in touch<br>

      <b>clear</b> — clear output<br>

      <b>help</b> — show commands

    </p>

  `,


  whoami:`

    <div class="whoami-grid">

      <div class="whoami-photo">

        <img
          src="https://avatars.githubusercontent.com/u/296903246?v=4"
          alt="Shon Santhosh"
        >

      </div>


      <div>

        <div class="prompt">
          shon@portfolio ~ % whoami
        </div>

        <h2>
          Shon Santhosh.
        </h2>


        <div class="identity-lines">

          <div>
            <small>NAME</small>
            <strong>Shon Santhosh</strong>
          </div>

          <div>
            <small>AGE</small>
            <strong>18</strong>
          </div>

          <div>
            <small>CURRENTLY</small>
            <strong>Computer Science Student</strong>
          </div>

          <div>
            <small>FOCUS</small>
            <strong>AI · Software · Building</strong>
          </div>

        </div>

      </div>

    </div>

  `,


  date:`

    <div class="prompt">
      shon@portfolio ~ % date
    </div>

    <h2 class="date-output">

      ${new Date().toLocaleString(
        [],
        {
          weekday:"long",
          year:"numeric",
          month:"long",
          day:"numeric",
          hour:"2-digit",
          minute:"2-digit"
        }
      )}

    </h2>

  `

};