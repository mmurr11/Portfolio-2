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
    width: 90%;
    margin: 10% ;
    border-bottom: 1px solid #303030;
    @media (max-width: 768px) {

    }
`;

const Title = styled.div`
    margin-right: 20px;
    margin-bottom: 20%;
    font-size: 4rem;
    text-align: left;
    padding: 4px;
    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

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

export default Welcome