import "./Welcome.scss";
let MMlogo = require("../images/fusciaMM.png");

const Welcome = (props) => {
  return (
    <div className="container-container">
      <div class="container-left">
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>Matthew Murray</h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p className="subtitle">Front-end web developer</p>
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logoCircle">
          <img src={MMlogo} />
        </div>
      </div>
      <div className="container-right">
        <div className="background-image">
          <div className="background-cover">
            <div className="intro">
              <p>
                Hey, I'm Matthew.
                <br />
                I'm a web developer based in Birmingham Al.
                <br />
                Thanks for checking out my work.
                <br />
                If you're looking to hire me,
                <br />
                just click "say hello" below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
