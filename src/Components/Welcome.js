import "./Welcome.scss";
import styled from "styled-components";
let MMlogo = require("../images/fusciaMM.png");

const Welcome = (props) => {
  return (
    <div className="container-container">
      <div class="container-left">
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h1>
              Hey, I'm Matthew<span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>Front-end web developer</p>
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logoCircle">
          <img src={MMlogo} />
        </div>
      </div>
      <div className="container-right">
        <div className="background-cover">
          <div className="intro">
            <p>
              Hey, my name is Matthew Murray. I'm a web developer based in
              Birmingham Al. Thanks for checking out my work. If you're looking
              to hire me, just click "say hello" below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
