import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Work = (props) => {
    return (
        <Container>
            <ProjectCard>
                <PhotoContainer>
                    <CardBackground />
                    <a>
                        <Photo />
                    </a>                    
                </PhotoContainer>
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
            </ProjectCard>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-area: auto;
    align-items: center;
    width: 300px;
    border-radius: 50%;
    @media (min-width: 768px) {
        max-width: 428px;    
    }
`;

const ProjectCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const PhotoContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  height: 200px;
`;

const CardBackground = styled.div`
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Links = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 6px;
  div {
      text-align: center;
      a {
          justify-content: space-between;
          padding: 16px;
        button {
            font-size: 12px;
            font-weight: 700;
            line-height: 1.3;
        }
    }
}
`;

export default Work