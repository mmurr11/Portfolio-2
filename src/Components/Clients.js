import styled from 'styled-components'
import { SharedCard } from './SharedCard'

const Clients  = (props) => {
    return (
        <Container>
            
            <ClientCard>
                <ClientContainer>
                    <ClientLinkedIn />
                    <ClientQuote>
                        <quote>"Best webite ever!"</quote>
                    </ClientQuote>
                </ClientContainer>
                <Links>                    
                        <div>
                            <span>5 stars</span>
                        </div>                    
                </Links>
            </ClientCard>

        </Container>
    );
};

const Container = styled.div`
    align-items: center;
    display: flex;  
    flex-direction: row; 
    justify-content: space-between;   
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ClientCard = styled.div`
  margin: 20px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 30px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  width: 350px;
  @media (min-width: 768px) {
    width: 250px;   
    }
`;

const ClientContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  height: 100px;
`;

const ClientLinkedIn = styled.div`
    border: 1px solid #141414;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const ClientQuote = styled.div`

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

export default Clients