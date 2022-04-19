import styled from "styled-components";

const ContactForm = (props) => {
  return (
    <Container className="container">
      <GetInTouch className="getInTouch">
        <span>Get in touch</span>
        <form action="https://formspree.io/f/myylqzwq" method="POST">
          <EmailForm className="emailForm">
            <label className="label" for="email">
              E-mail
            </label>
            <textarea
              className="textarea"
              name="email"
              id="email"
              rows="1"
            ></textarea>
          </EmailForm>
          <SubjectForm className="subjectForm">
            <label className="label" for="subject">
              Subject
            </label>
            <textarea
              className="textarea"
              name="subject"
              id="subject"
              rows="1"
            ></textarea>
          </SubjectForm>
          <MessageForm className="messageForm">
            <label className="label" for="message">
              Message
            </label>
            <textarea
              className="textarea"
              name="message"
              id="message"
              rows="5"
            ></textarea>
          </MessageForm>
          <Send className="send">
            <button type="submit" class="button submit" id="sendMsg">
              Send
            </button>
          </Send>
        </form>
      </GetInTouch>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  min-height: 40rem;
  min-width: 80%;
  display: flex;
  margin-bottom: 2%;
  background-color: #202020;
  border-radius: 3%;
  .label {
    font-size: 2.2rem;
    font-weight: 600;
    width: 15%;
    text-align: left;
    padding: 1%;
  }
  .textarea {
    line-height: 2.5;
    width: 35rem;
    margin: 1%;
    background-color: #202020;
    resize: none;
  }
`;

const GetInTouch = styled.div`
  width: 60%;
  height: 100%;
  text-align: left;
  margin-right: 10%;
  span {
    font-size: 4rem;
    font-weight: 500;
    padding: 5%;
  }
`;

const Form = styled.div`
  text-align: left;
  padding: 1%;
  display: flex;
`;

const EmailForm = styled(Form)``;

const SubjectForm = styled(Form)``;

const MessageForm = styled(Form)``;

const Send = styled.div`
  text-align: center;
  padding: 1%;
  margin-left: 8%;
  button {
    border: none;
    font-size: 2.2rem;
    font-weight: 600;
    &:hover {
      color: #627eea;
      transition: 0.25s;
    }
  }
`;

export default ContactForm;
