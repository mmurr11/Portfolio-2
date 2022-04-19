import styled from "styled-components";
// import Clients from './Clients'
import Welcome from "./Welcome";
import Work from "./Work";
import React from "react";
import ContactContainer from "./Hello/ContactContainer";

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Work />
      <ContactContainer />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10%;
  overflow: none;
  background-color: #202020;
`;

export default Home;
