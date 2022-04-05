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
        <img src={MMlogo} />
      </div>
    </div>
  );
};

export default Welcome;
