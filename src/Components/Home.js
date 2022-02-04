import styled from 'styled-components'
// import Clients from './Clients'
import Contact from './Contact'
import Welcome from './Welcome'
import Work from './Work'

const Home = (props) => {
    return (
        <Layout>
            <Welcome />
            <Work />
            <Contact />
        </Layout>
    );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10%;
  margin-left: 5%;
  align-items: center;
  overflow: none;
  background-color: #202020;
  
`;

export default Home;