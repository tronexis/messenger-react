import React from "react";
import styled from "styled-components/macro";
import MessagingPanel from "./MessagingPanel";
import ThreadHeader from "./ThreadHeader";

const FullThreadPanel = (props) => {
  return (
    <Container>
      <ThreadHeader />
      <MessagingPanel />
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.flex.col(0, true)}
  flex: 8;
`;

export default FullThreadPanel;
