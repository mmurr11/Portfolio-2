import React, { useState } from "react";
import "./ContactContainer.scss";
import styled from "styled-components";
import FormDialog from "./ContactForm";
const gitImg = require("../../images/githubLogo.png");
const linkedinImg = require("../../images/linkedinLogo.png");
const clipboardImg = require("../../images/clipboardPink.png");

const ContactContainer = () => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const copiedFunction = () => {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  const handleCopyClick = () => {
    copyTextToClipboard("murraymatthew002@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
    copiedFunction();
  };
  return (
    <div className="contact-container">
      <Info className="info">
        <Email className="email">
          <span>E-mail</span>
          <p type="text">
            murraymatthew002@gmail.com
            <button onClick={handleCopyClick}>
              <img src={clipboardImg} alt="clipboard" />
            </button>
          </p>
        </Email>
        <Social className="social">
          <h3>Socials</h3>
          <Icons className="icons">
            <li>
              <a
                href="https://github.com/mmurr11"
                class="icon brands fa-github"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={gitImg} width="25rem" height="25rem" />
                <br />
                <span>https://github.com/mmurr11</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mmurraydev/"
                class="icon brands fa-linkedin-in"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={linkedinImg} width="25rem" height="25rem" />
                <br />
                <span>https://www.linkedin.com/in/mmurraydev/</span>
              </a>
            </li>
          </Icons>
        </Social>
      </Info>
      <FormDialog />
      <div id="toast">COPIED TO CLIPBOARD</div>
    </div>
  );
};

const Info = styled.div`
  width: 58%;
  max-height: 30rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 2.5%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
  }
`;

const Email = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  span {
    font-size: 2.2rem;
    font-weight: 600;
    color: #e91e63;
  }
  p {
    font-size: 2rem;
    color: #c7c7c7;
    padding: 5%;
    border: none;
    button {
      max-width: 12%;
      max-height: 12%;
      border: none;
      color: white;
      background-color: #202020;
      @media (max-width: 1300px) {
        max-width: 15%;
        max-height: 15%;
        padding-top: 10%;
      }

      img {
        width: 90%;
        height: 90%;
        padding-left: 20%;
        cursor: pointer;
        @media (max-width: 1300px) {
          padding-left: 0%;
        }
      }
    }
  }
`;

const Social = styled.div`
  font-size: 2.2rem;
  color: #e91e63;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2.5%;
`;

const Icons = styled.ul`
  list-style-type: none;
  font-size: 2rem;
  padding: 2.5%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  li {
    margin: 2.5% 0;
    font-size: 1.8rem;
    a {
      text-decoration-color: #e91e63;
      color: #c7c7c7;
      &:hover {
        color: #e91e63;
        transition: 0.25s;
      }
    }
  }
`;

export default ContactContainer;
