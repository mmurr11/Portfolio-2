import styled from 'styled-components'
import Clients from './Clients'
import Contact from './Contact'
import Welcome from './Welcome'
import Work from './Work'

const Home = (props) => {
    return (
        <Layout>
            <Welcome />
            <Work />
            <Clients />
            <Contact />
        </Layout>
    );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 25px;
  margin: 25px 10%;
  align-items: center;
  overflow: none;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export default Home;