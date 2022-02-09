import styled from 'styled-components'
import { SharedCard } from './SharedCard'
let gitImg = require('./githubLogo.png')
let linkedinImg = require('../images/linkedinLogo.png')

const Contact  = (props) => {
    return (
        <Container className='container'>
            <GetInTouch className='getInTouch'>
                <span>Get in touch</span>
                <form action="https://formspree.io/f/myylqzwq" method="POST">
                    <EmailForm className='emailForm'>
                        <label className='label' for="email">E-mail</label>
					    <textarea className='textarea' name="email" id="email" rows="1"></textarea>
                    </EmailForm>
                    <SubjectForm className='subjectForm'>
                        <label className='label' for="subject">Subject</label>
						<textarea className='textarea' name="subject" id="subject" rows="1"></textarea>
                    </SubjectForm>
                    <MessageForm className='messageForm'>
                        <label className='label' for="message">Message</label>
						<textarea className='textarea' name="message" id="message" rows="5"></textarea>
                    </MessageForm>
                    <Send className='send'>
                        <button type="submit" class="button submit" id="sendMsg">
                            Send
                        </button>
                    </Send>
                </form>
            </GetInTouch>
            
			<Info className='info'>
				<Email className='email'>
						<span>E-mail</span>
						<p>mattm898865@gmail.com</p>
				</Email>
				<Social className='social'>
					<h3>Socials</h3>
    				<Icons className="icons">
						<li>
                            <a href="https://github.com/mmurr11" class="icon brands fa-github">
						        <img src={gitImg} width='25rem' height='25rem' />
                            </a>
                        </li>
						<li>
                            <a href="https://www.linkedin.com/in/matthew-murray-038536217/"	class="icon brands fa-linkedin-in">
                                <img src={linkedinImg} width='25rem' height='25rem' />
                            </a>
						</li>
	 				</Icons>
				</Social>
			</Info>

        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    min-height: 40rem;
    min-width: 80%;
    display: flex;
    margin-bottom: 2%;
    background-color: #181818;
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

const EmailForm = styled(Form)`   
`;

const SubjectForm = styled(Form)`
`;

const MessageForm = styled(Form)`
`;

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

const Info = styled.div`
    width: 30%;
    height: 30rem;
`;

const Email = styled.div`
    margin-bottom: 10%;
    span {
        font-size: 2.2rem;
        font-weight: 600;
    }
    p {
        font-size: 2rem;
        padding: 2.5% 0 10% 5%;
    }
`;

const Social = styled.div`
    font-size: 2.2rem;
    font-weight: 600;
    text-decoration: none;
`;

const Icons = styled.ul`
    list-style-type: none;
    font-size: 2rem;
    padding: 2.5% 0 10% 5%;
    display: flex;
    flex-direction: row;
    li {
        margin-right: 5%;
        a {
            img {
                &:hover {
                    color: #627eea;
                    transition: 0.25s;
                }
            }
        }
    }
`;

export default Contact