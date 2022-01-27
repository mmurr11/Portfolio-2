import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container>
            
            <ProjectCard>
                <PhotoContainer>
                        <Photo>
                            <Links>                    
                                <div>
                                    <a href='#'>
                                        <button>Code</button>
                                    </a>
                                    <a href='#'>
                                        <button>Demo</button>
                                    </a>
                                </div>                    
                            </Links>
                        </Photo>                                        
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard>
                <PhotoContainer>
                        <Photo>
                            <Links>                    
                                <div>
                                    <a href='#'>
                                        <button>Code</button>
                                    </a>
                                    <a href='#'>
                                        <button>Demo</button>
                                    </a>
                                </div>                    
                            </Links>
                        </Photo>                                        
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard>
                <PhotoContainer>
                        <Photo>
                            <Links>                    
                                <div>
                                    <a href='#'>
                                        <button>Code</button>
                                    </a>
                                    <a href='#'>
                                        <button>Demo</button>
                                    </a>
                                </div>                    
                            </Links>
                        </Photo>                                        
                </PhotoContainer>
            </ProjectCard>
            <ProjectCard>
                <PhotoContainer>
                        <Photo>
                            <Links>                    
                                <div>
                                    <a href='#'>
                                        <button>Code</button>
                                    </a>
                                    <a href='#'>
                                        <button>Demo</button>
                                    </a>
                                </div>                    
                            </Links>
                        </Photo>                                        
                </PhotoContainer>
            </ProjectCard>

        </Container>
    );
};

const Container = styled.div`
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
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  height: 300px;
`;

const Photo = styled.div`
  box-shadow: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 7.5%;
`;

const Links = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  div {
      text-align: center;
      a {
          justify-content: space-between;
          padding: 16px;
        button {
            font-size: 12px;
            font-weight: 900;
            line-height: 1.3;
            border: none;
            background: transparent;
            &:hover {
                color: #2557a7;
            }
        }
    }
}
`;

export default Work