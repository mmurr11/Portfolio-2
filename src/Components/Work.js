import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container id="container">
            
            <ProjectCard className="projectCard" id='hubbel'>
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
    position: relative;
    display: grid; 
    grid-gap: 15rem;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: space-evenly;
    min-width: 70%;
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
  min-width: 30rem;
  height: 45rem;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const PhotoContainer = styled.div`
  
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  word-break: break-word;
  height: auto;
`;

const Photo = styled.div`
    
    border-radius: 7%;
    transition: box-shadow 83ms;
    border: none;
    min-width: 101%;
    height: 101%;
    margin: auto;
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
                min-width: 6rem;
                font-size: 1.4rem;
                font-weight: 800;
                line-height: 1;
                border: none;
                margin: 10%;
                &:hover {
                    color: #2557a7;
                    transition: 0.75s;
                }
            }
        
        }
`;

export default Work