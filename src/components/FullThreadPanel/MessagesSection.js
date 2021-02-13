import React from "react";
import styled from "styled-components/macro";
import MessageRow from "./MessageRow";

const MessagesSection = (props) => {
  return <Container>{messages(10)}</Container>;
};

const Container = styled.div`
  overflow-y: auto;
  ${({ theme }) => theme.flex.colReverse(1)}
  flex: 1;
  padding-top: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const messages = (x) =>
  Array(x)
    .fill(0)
    .map((_, i) => (
      <>
        <MessageRow user />
        <MessageRow />
      </>
    ));

export default MessagesSection;
