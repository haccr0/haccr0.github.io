/* =========================
   VISITOR COUNTER
   Uses CounterAPI V1 so it works on static GitHub Pages.
========================= */

const VISITOR_NAMESPACE = "haccr0.github.io";
const VISITOR_COUNTER = "visits";
const VISITOR_API =
  `https://api.counterapi.dev/v1/${encodeURIComponent(VISITOR_NAMESPACE)}/${VISITOR_COUNTER}`;


async function recordVisit(){

  try{

    if(sessionStorage.getItem("portfolio-visit-recorded"))
      return;

    const response = await fetch(`${VISITOR_API}/up`, {
      method:"GET",
      cache:"no-store"
    });

    if(response.ok){
      sessionStorage.setItem("portfolio-visit-recorded", "1");
    }

  }catch(error){
    // Visitor counting is optional and must never affect the portfolio.
  }

}


async function showVisitors(){

  openOutput(`

    <div class="prompt">
      shon@portfolio ~ % visitors
    </div>

    <h2>
      Visitors.
    </h2>

    <p>
      Fetching visit count…
    </p>

  `);

  try{

    const response = await fetch(VISITOR_API, {
      method:"GET",
      cache:"no-store"
    });

    if(!response.ok)
      throw new Error("counter unavailable");

    const data = await response.json();
    const count =
      data.count ??
      data.value ??
      data.data?.count ??
      data.data?.value;

    if(count === undefined)
      throw new Error("invalid counter response");

    openOutput(`

      <div class="prompt">
        shon@portfolio ~ % visitors
      </div>

      <h2>
        ${Number(count).toLocaleString()} visits.
      </h2>

      <p>
        Thanks for stopping by.
      </p>

    `);

  }catch(error){

    openOutput(`

      <div class="prompt">
        shon@portfolio ~ % visitors
      </div>

      <h2>
        Visitor counter unavailable.
      </h2>

      <p>
        Try again in a moment.
      </p>

    `);

  }

}


window.addEventListener("load", recordVisit);
