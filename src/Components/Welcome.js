import styled from "styled-components";
import "./Welcome.scss";

const Welcome = (props) => {
  return (
    <div class="container">
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
  );
};

const Subtitle = styled.div`
  margin-left: 50%;
  margin-bottom: 10%;
  font-size: 2rem;
  text-align: left;
  @media (max-width: 768px) {
    padding-top: 25%;
    padding-bottom: 10%;
    margin-left: 0;
  }
`;

export default Welcome;
