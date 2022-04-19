import "./Work.scss";

const Work = (props) => {
  return (
    <>
      <span className="myWork">
        <span className="angle">&lt;</span>My Work
        <span className="angle">/&gt;</span>
      </span>
      <div className="wrapper">
        <div className="card">
          <input
            type="checkbox"
            id="card1"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="card1Front">
              <div className="inner">
                <h2>Simple todo SPA</h2>
                <label
                  htmlFor="card1"
                  className="button return"
                  aria-hidden="true"
                >
                  <span className="btnText">Details</span>
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="about">
                  <h3>What is this project?</h3>
                  <p>
                    This is a simple todo SPA. It was my introduction into React
                    functional components and state management. It also made me
                    realize how awesome UI libraries like MUI are!
                  </p>
                  <h3>What technologies are used?</h3>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Material UI</li>
                  </ul>
                </div>
                <div className="buttonWrapper">
                  <a
                    href="https://github.com/mmurr11/Planner-CRUD"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Code</span>
                    </label>
                  </a>
                  <label
                    htmlFor="card1"
                    class="button return"
                    aria-hidden="true"
                  >
                    <span className="btnText">Flip</span>
                  </label>
                  <a
                    href="https://mmurr11.github.io/Planner-CRUD/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Demo</span>
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <input
            type="checkbox"
            id="card2"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="card2Front">
              <div className="inner">
                <h2>Fullstack Reddit Clone</h2>
                <label htmlFor="card2" class="button return" aria-hidden="true">
                  <span className="btnText">Details</span>
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="about">
                  <h3>What is this project?</h3>
                  <p>
                    This is a full stack, simplified Reddit clone. Fully
                    functional CRUD and user authentication system with cookies
                    to store a session ID. The website is fully responsive. The
                    frontend is hosted on Vercel and the backend is hosted on
                    Heroku.
                  </p>
                  <h3>What technologies are used?</h3>
                  <ul>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>GraphQl</li>
                    <li>Next.js</li>
                    <li>Redis</li>
                    <li>Postgres</li>
                    <li>TypeORM</li>
                    <li>Docker</li>
                  </ul>
                </div>
                <div className="buttonWrapper">
                  <a
                    href="https://github.com/mmurr11/reddit-clone"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Code</span>
                    </label>
                  </a>
                  <label
                    htmlFor="card2"
                    class="button return"
                    aria-hidden="true"
                  >
                    <span className="btnText">Flip</span>
                  </label>
                  <a
                    href="https://fake-reddit-1.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Demo</span>
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <input
            type="checkbox"
            id="card3"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="card3Front">
              <div className="inner">
                <h2>LinkedIn Front-Facing Clone</h2>
                <label
                  htmlFor="card3"
                  className="button return"
                  aria-hidden="true"
                >
                  <span className="btnText">Details</span>
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="about">
                  <h3>What is this project?</h3>
                  <p>
                    This is a front facing replica of LinkedIn's home and login
                    pages. This was my attempt at recreating what LinkedIn looks
                    like through code.
                  </p>
                  <h3>What technologies are used?</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Styled Components</li>
                  </ul>
                </div>
                <div className="buttonWrapper">
                  <a
                    href="https://github.com/mmurr11/linkedin-clone"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Code</span>
                    </label>
                  </a>
                  <label
                    htmlFor="card3"
                    class="button return"
                    aria-hidden="true"
                  >
                    <span className="btnText">Flip</span>
                  </label>
                  <a
                    href="https://mmurr11.github.io/linkedin-clone/#/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Demo</span>
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <input
            type="checkbox"
            id="card4"
            className="more"
            aria-hidden="true"
          />
          <div className="content">
            <div className="front" id="card4Front">
              <div className="inner">
                <h2>Hubbel.crypto</h2>
                <label
                  htmlFor="card4"
                  className="button return"
                  aria-hidden="true"
                >
                  <span className="btnText">Details</span>
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="about">
                  <h3>What is this project?</h3>
                  <p>
                    This is a full stack decentralized cryptocurrency exchange.
                    You can login with A Metamask Ethereum wallet and swap any
                    ERC-20 tokens. This was my first project and my introduction
                    to web development.
                  </p>
                  <h3>What technologies are used?</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>REST API</li>
                    <li>Morlais 1inch plugin</li>
                  </ul>
                </div>
                <div className="buttonWrapper">
                  <a
                    href="https://github.com/mmurr11/My-dex"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Code</span>
                    </label>
                  </a>
                  <label
                    htmlFor="card4"
                    class="button return"
                    aria-hidden="true"
                  >
                    <span className="btnText">Flip</span>
                  </label>
                  <a
                    href="https://mmurr11.github.io/My-DEX/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <label class="button" aria-hidden="true">
                      <span className="btnText">Demo</span>
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
