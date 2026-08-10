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
          <span class="profile-name">
            <i class="devicon-github-original profile-icon" aria-hidden="true"></i>
            <span>GitHub</span>
          </span>
          <span>↗</span>
        </a>

        <a
          href="https://discord.com/users/1520684805413535844"
          target="_blank"
          rel="noopener"
        >
          <span class="profile-name">
            <i class="fa-brands fa-discord profile-icon" aria-hidden="true"></i>
            <span>Discord</span>
          </span>
          <span>↗</span>
        </a>

        <a
          href="https://instagram.com/_.shhonn"
          target="_blank"
          rel="noopener"
        >
          <span class="profile-name">
            <i class="fa-brands fa-instagram profile-icon" aria-hidden="true"></i>
            <span>Instagram</span>
          </span>
          <span>↗</span>
        </a>

      </div>

    `
  },




  projects:{

    title:"projects",

    html:`

      <div class="prompt">
        shon@portfolio ~ % projects
      </div>

      <h2>
        Projects.
      </h2>

      <div class="project-list">

        <article class="project-item">

          <div class="project-number">01</div>

          <div class="project-content">
            <strong>Project 01</strong>
            <span class="project-status">● Coming Soon</span>
            <p class="project-description">
              Coming Soon — description will be added when the project is ready.
            </p>
            <div class="project-stack">Tech stack: TBD</div>

            <div class="project-links">
              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Source Code ↗
              </a>

              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Demo ↗
              </a>
            </div>
          </div>

        </article>

        <article class="project-item">

          <div class="project-number">02</div>

          <div class="project-content">
            <strong>Project 02</strong>
            <span class="project-status">● Coming Soon</span>
            <p class="project-description">
              Coming Soon — description will be added when the project is ready.
            </p>
            <div class="project-stack">Tech stack: TBD</div>

            <div class="project-links">
              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Source Code ↗
              </a>

              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Demo ↗
              </a>
            </div>
          </div>

        </article>

        <article class="project-item">

          <div class="project-number">03</div>

          <div class="project-content">
            <strong>Project 03</strong>
            <span class="project-status">● Coming Soon</span>
            <p class="project-description">
              Coming Soon — description will be added when the project is ready.
            </p>
            <div class="project-stack">Tech stack: TBD</div>

            <div class="project-links">
              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Source Code ↗
              </a>

              <a class="project-link disabled" href="#" aria-disabled="true" onclick="return false;">
                Demo ↗
              </a>
            </div>
          </div>

        </article>

      </div>

    `
  },


  skills:{

    title:"skills",

    html:`

      <div class="prompt">
        shon@portfolio ~ % skills
      </div>

      <h2>
        Skills.
      </h2>

      <div class="skills-list">

        <div class="skill-item">
          <i class="devicon-python-plain skill-icon" aria-hidden="true"></i>
          <span>Python</span>
        </div>

        <div class="skill-item">
          <i class="devicon-git-plain skill-icon" aria-hidden="true"></i>
          <span>Git &amp; GitHub</span>
        </div>

        <div class="skill-item">
          <span class="skill-icon skill-icon-duo" aria-hidden="true">
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
          </span>
          <span>HTML &amp; CSS</span>
        </div>

        <div class="skill-item">
          <i class="devicon-javascript-plain skill-icon" aria-hidden="true"></i>
          <span>JavaScript</span>
        </div>

        <div class="skill-item">
          <i class="devicon-fastapi-plain skill-icon" aria-hidden="true"></i>
          <span>REST APIs</span>
        </div>

        <div class="skill-item">
          <i class="devicon-json-plain skill-icon" aria-hidden="true"></i>
          <span>JSON</span>
        </div>

        <div class="skill-item">
          <i class="devicon-vscode-plain skill-icon" aria-hidden="true"></i>
          <span>VS Code</span>
        </div>

        <div class="skill-item">
          <i class="devicon-jupyter-plain skill-icon" aria-hidden="true"></i>
          <span>Jupyter Notebook</span>
        </div>

      </div>

    `
  },



  resume:{

    title:"resume",

    html:`

      <div class="prompt">
        shon@portfolio ~ % resume
      </div>

      <h2>
        Resume.
      </h2>

      <p>
        My resume will be available here soon.
      </p>

      <a
        class="contact-email resume-link"
        href="assets/resume.pdf"
        target="_blank"
        rel="noopener"
      >
        Open Resume ↗
      </a>

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

      <b>connect</b> — get in touch<br>\n\n      <b>projects</b> — view projects<br>\n\n      <b>skills</b> — view skills<br>

      <b>resume</b> — open resume<br>

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
            <strong>Bachelor in AI</strong>
          </div>

          <div>
            <small>FOCUS</small>
            <strong>AI · Software · Building</strong>
          </div>

        </div>

      </div>

    </div>

  `,


  github:`

    <div class="prompt">
      shon@portfolio ~ % github
    </div>

    <h2>
      GitHub.
    </h2>

    <div class="github-stats" id="githubStats">
      <div><small>USERNAME</small><strong>haccr0</strong></div>
      <div><small>STATUS</small><strong>Loading activity…</strong></div>
    </div>

  `,


};
