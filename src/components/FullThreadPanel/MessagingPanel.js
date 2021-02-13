import React from "react";
import styled from "styled-components/macro";
import { Box } from "../Styles";
import MessagesSection from "./MessagesSection";
import SendMessageBar from "./SendMessageBar";

const MessagingPanel = (props) => {
  return (
    <Container>
      <MessagesSection />
      <SendMessageBar />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.col(1)}
  flex: 1;
  padding: 1rem;
  /* padding-top: 0; */
  overflow-y: auto;
`;

export default MessagingPanel;
