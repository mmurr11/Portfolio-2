import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Welcome  = (props) => {
    return (
        <Intro>
            <Title>
                <h1>
                    Hey, <br/> I'm Matthew.
                </h1>
            </Title>
            <Subtitle>
                <h2>
                    I'm a front-end developer based in Birmingham, Al.
                    <br/>
                    Thanks for checking out my work.<br/>
                    If you're looking to hire me, <br/>
                    then fill out the contact form below.
                </h2>
            </Subtitle>
        </Intro>
    )
}

const Intro = styled(SharedCard)`
    outline: none;
    padding: 0.5rem;
    margin: 10%;
    @media (min-width: 768px) {
        width: 90%;
        margin-bottom: 20%;
    }
`;

const Title = styled.div`
    margin-top: 10%;
    font-size: 4rem;
    text-align: left;
    padding: 4px;
    @media (min-width: 768px) {
        margin-top: 10%;
        margin-right: 20px;
        margin-bottom: 20%;
    }
`;

const Subtitle = styled.div`
    margin-left: 20%;
    margin-bottom: 10%;
    font-size: 2rem;
    text-align: left;
    padding-top: 25%;
    padding-bottom: 10%;
    @media (min-width: 768px) {
        margin-top: 30px;
        margin-left: 50%;
        padding: 0px;
    }
`;

export default Welcome