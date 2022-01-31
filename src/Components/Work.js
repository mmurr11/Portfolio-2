import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container id="container">
            
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                    <Photo className='photo' id='hubbel'>
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
    margin: 10%;
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
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  width: 30rem;
  height: 45rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PhotoContainer = styled.div`
  
  word-wrap: break-word;
  word-break: break-word;
`;

const Photo = styled.div`
    border-radius: 7%;
    transition: box-shadow 83ms;
    border: none;
    width: 30em;
    height: 45em;
`;

const Links = styled.div`
    position: absolute;
    bottom: 0; 
    display: flex;  
    flex-direction: row; 
    margin: 0 24%;
    background: none;
        a {
            justify-content: space-between;
            background: none;
            button {
                background: none; 
                width: 6rem;
                font-size: 1.4rem;
                font-weight: 800;
                line-height: 1;
                border: none;
                margin: 10%;
                &:hover {
                    color: #2557a7;
                    transition: 0.25s;
                }
            }
        
        }
`;

document.getElementById('hubbel').style.backgroundImage = 'url(https://i.imgur.com/rEqOeM1.png)'

export default Work