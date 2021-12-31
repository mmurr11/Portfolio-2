import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Contact  = (props) => {
    return (
        <Container>
            <GetInTouch>
                <form action="https://formspree.io/f/myylqzwq" method="POST">
                    <EmailForm>
                        <label for="email">E-mail</label>
					    <textarea name="email" id="email" rows="1"></textarea>
                    </EmailForm>
                    <SubjectForm>
                        <label for="subject">Subject</label>
						<textarea name="subject" id="subject" rows="1"></textarea>
                    </SubjectForm>
                    <MessageForm>
                        <label for="message">Message</label>
						<textarea name="message" id="message" rows="5"></textarea>
                    </MessageForm>
                    <Send>
                        <button type="submit" class="button submit" id="sendMsg">
                            Send Message
                        </button>
                    </Send>
                </form>
            </GetInTouch>
        </Container>
    )
}

const Container = styled(SharedCard)`
    
`;

const GetInTouch = styled(SharedCard)`
    
`;

const EmailForm = styled(SharedCard)`
    
`;

const SubjectForm = styled(SharedCard)`
    
`;

const MessageForm = styled(SharedCard)`
    
`;

const Send = styled(SharedCard)`

`;

export default Contact