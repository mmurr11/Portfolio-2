import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container id="container">
            
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>                                       
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>                                       
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>                                       
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard className="projectCard">
                <PhotoContainer className="photoContainer" >
                        <Links className="links">                    
                                
                            <a href='#'>
                                <button>Code</button>
                            </a>
                            <a href='#'>
                                <button>Demo</button>
                            </a>
                                                   
                         </Links>                                       
                </PhotoContainer>
            </ProjectCard>
            

        </Container>
    );
};

const Container = styled.div`
    position: relative;
    align-items: center;
    display: flex;  
    flex-direction: row; 
    justify-content: space-between;   
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
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
  width: 20%;
  @media (min-width: 768px) {
    }
`;

const PhotoContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  word-break: break-word;
  height: 32.5em;
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
                }
            }
        
}
`;

export default Work