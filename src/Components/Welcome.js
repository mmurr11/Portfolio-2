import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Welcome  = (props) => {
    return (
        <Intro>
            <Title>
                <h1>
                    Hey, I'm Matthew.
                </h1>
            </Title>
            <Subtitle>
                <h2>
                    I'm a front-end developer based in Birmingham, Al.
                    <br/>
                    If you're looking to hire me, then fill out the contact form below.
                </h2>
            </Subtitle>
        </Intro>
    )
}

const Intro = styled(SharedCard)`
    border: 1px solid #373737;

    > * {
        background-color: #202020;
    }
`;

const Title = styled.div`
`;

const Subtitle = styled.div`
`;

export default Welcome