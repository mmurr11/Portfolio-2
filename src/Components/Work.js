import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container id="container">
            
            <ProjectCard className="projectCard">
                <ProjectName>
                    <a>hubbel.crypto</a>
                </ProjectName>
                    <PhotoContainer className="photoContainer" >
                        <Photo className='photo' id='hubbel'>
                            <img src='https://i.imgur.com/rEqOeM1.png' />
                            <Links className="links">                    
                            
                                <a href='#'>
                                    <button>Code</button>
                                </a>
                                <a href='#'>
                                    <button>Demo</button>
                                </a>
                                                    
                            </Links>   
                        </Photo>                                         
                    </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                    <Photo className='photo'>
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>   
                    </Photo>                                         
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                    <Photo className='photo'>
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>   
                    </Photo>                                         
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                    <Photo className='photo'>
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>   
                    </Photo>                                         
                </PhotoContainer>
            </ProjectCard>

            

        </Container>
    );
};

const Container = styled.div`
    margin-bottom: 10%;
    padding-bottom: 10%;
    position: relative;
    display: grid; 
    grid-gap: 15rem;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: space-evenly;
    width: 70%;
    border-bottom: 1px solid #303030;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

const ProjectCard = styled.div`
  text-align: center;
  background-color: #fff;
  border-radius: 7.5%;
  transition: box-shadow 83ms;
  position: relative;
  border: solid 1px #181818;
  width: 35rem;
  height: 50rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectName = styled.div`
    background-color: #202020;
    min-height: 1.9rem;
    text-align: center;
    border: none;
    padding: 0.75rem;
    a {
        font-size: 2rem;
        font-weight: 800;
        line-height: 1;
        border: none;
        background: transparent;
    }
`;

const PhotoContainer = styled.div`
  border-radius: 7.5%;
  word-wrap: break-word;
  word-break: break-word;
`;

const Photo = styled.div`
    border: none;    
    img {
        position: relative;
        object-fit: cover;
        border: none;
        width: 35rem;
        height: 50rem;
        border-bottom-left-radius: 7.5%;
        border-bottom-right-radius: 7.5%;
    }
`;

const Links = styled.div`
    position: absolute;
    bottom: 0; 
    display: flex;  
    flex-direction: row; 
    margin: -11% 33%;
    background: none;
        a {
            justify-content: space-between;
            background: none;
            button {
                background: none; 
                width: 6rem;
                font-size: 1.5rem;
                font-weight: 1000;
                color: #c7c7c7;
                -webkit-text-stroke-width: 0.5px;
                -webkit-text-stroke-color: #000;
                border: none;
                margin: 10%;
                &:hover {
                    color: #627eea;
                    transition: 0.25s;
                }
            }
        
        }
`;

export default Work