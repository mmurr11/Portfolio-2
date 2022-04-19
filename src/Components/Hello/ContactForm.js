import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("myylqzwq");
  if (state.succeeded) {
    return <p>Thanks! I'll get back to you soon.</p>;
  }
  const sentFunction = () => {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  return (
    <Container className="container">
      <span>Get in touch</span>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="subjectAndEmail box">
            <EmailForm className="emailForm">
              <label className="label" htmlFor="email">
                E-mail
              </label>
              <textarea
                className="textarea"
                name="email"
                type="email"
                id="email"
                rows="1"
              ></textarea>
            </EmailForm>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <SubjectForm className="subjectForm">
              <label className="label" htmlFor="subject">
                Subject
              </label>
              <textarea
                className="textarea"
                name="subject"
                id="subject"
                rows="1"
              ></textarea>
            </SubjectForm>
          </div>
          <div className="message box">
            <MessageForm className="messageForm">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                className="textarea"
                name="message"
                id="message"
                rows="5"
              ></textarea>
            </MessageForm>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="submit">
          <Send className="send">
            <button
              type="submit"
              class="button submit"
              id="sendMsg"
              disabled={state.submitting}
              onClick={sentFunction}
            >
              Send
            </button>
          </Send>
        </div>
      </Form>
      <div id="toast">
        <div class="checkicon">
          <i class="fas fa-check-square"></i>
        </div>
        EMAIL SENT. THANK YOU!
      </div>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff !important;
  color: #202020;
  border-top: 2px solid #ffb510;
  margin-top: 2%;
  .label {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: left;
    padding: 1%;
    min-width: 20%;
    margin: auto;
  }
  .textarea {
    line-height: 2.5;
    width: 35rem;
    margin: 1%;
    background-color: #fff;
    resize: none;
    border: 2px solid #ffb510;
  }
  span {
    font-size: 3rem;
    color: #e91e63;
    font-weight: 700;
    margin-top: 2.5%;
  }
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    align-items: center;
    font-family: "Arial", sans-serif;
    justify-content: center;
    @media (max-width: 1300px) {
      flex-direction: column;
      align-items: center;
    }
    .subjectAndEmail {
      display: flex;
      flex-direction: column;
    }
    .message {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    .box {
      margin: 10%;
    }
  }
`;

const Form = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 100vw;
  min-height: 40vh;
`;

const EmailForm = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 10%;
`;

const SubjectForm = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const MessageForm = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Send = styled.div`
  text-align: center;
  margin-bottom: 10%;
  button {
    cursor: pointer;
    display: block;
    padding: 0 1.5em;
    height: 2.5em;
    line-height: 3.2em;
    margin: 0 auto 2.5% auto;
    min-width: 55%;
    background-color: #fff;
    border: 3px solid #ffb510;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    backface-visibility: hidden;
    transition: 0.3s ease-in-out;
    box-shadow: none;
    color: #e91e63 !important;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #627eea;
      transition: 0.25s;
    }
  }
`;

export default ContactForm;
