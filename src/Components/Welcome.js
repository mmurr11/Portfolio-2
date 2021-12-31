import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Welcome  = (props) => {
    return (
        <Intro>
            <img src='' alt='' />
            <span>Welcome</span>
        </Intro>
    )
}

const Intro = styled(SharedCard)`
    
`;

export default Welcome