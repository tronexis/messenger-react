import React from "react";
import styled from "styled-components/macro";
import BadgedTitle from "./BadgedTitle";
import SearchBar from "./SearchBar";
import Thread from "./Thread";

const ThreadsPanel = (props) => {
  return (
    <Container>
      <Header>
        <BadgedTitle title="Messages" count="6" />
        <NewChatButton>+ Create new chat</NewChatButton>
      </Header>
      <SearchBar placeholder="Search by keyword" />
      <ThreadsSection>
        <Thread
          name="Mikasa Ackerman"
          photo="https://data.whicdn.com/images/90838246/original.gif"
          lastMessage="Shame kakku! Shame!"
          unreadMessagesCount="99+"
          lastMessageTime="2 mins ago"
        />
      </ThreadsSection>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container.V}
  flex: 3;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const NewChatButton = styled.button`
  color: ${({ theme }) => theme.color.font[2]};
  font-weight: 600;
  background: none;
  border: 0;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color[1]};
  }
`;

const ThreadsSection = styled.section`
  ${({ theme }) => theme.container.V}
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ThreadsPanel;
