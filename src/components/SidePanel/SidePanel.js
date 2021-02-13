import React from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar/Navbar";
import ThreadsPanel from "./ThreadsPanel/ThreadsPanel";

const SidePanel = (props) => {
  return (
    <Container>
      <Navbar />
      <ThreadsPanel />
    </Container>
  );
};

const Container = styled.aside`
  ${({ theme }) => theme.flex.row(1)}
  flex: 4;
  padding: 1rem;
`;

export default SidePanel;
