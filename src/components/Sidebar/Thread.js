import React from "react";
import styled from "styled-components/macro";
import { Avatar } from "@material-ui/core";
import { Timestamp, Badge } from "../Styles/UI";

const Thread = styled((props) => (
  <div className={props.className}>
    <Avatar src={props.photo} />
    <ThreadCol>
      <ThreadRow>
        <ThreadTitle>{props.name}</ThreadTitle>
        <Timestamp>{props.lastMessageTime}</Timestamp>
      </ThreadRow>
      <ThreadRow>
        <ThreadText>{props.lastMessage}</ThreadText>
        <Badge size="2">{props.unreadMessagesCount}</Badge>
      </ThreadRow>
    </ThreadCol>
  </div>
))`
  ${({ theme }) => theme.flex.row(1)}
  background: ${({ theme }) => theme.color.bg[2]};
  border-radius: 0.75rem;
  padding: 1rem 1rem;
  align-items: center;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.color[1]};

    & * {
      color: ${({ theme }) => theme.color.font[1]};
    }
  }
`;

const ThreadRow = styled.div`
  ${({ theme }) => theme.flex.row(0)}
  justify-content: space-between;
  align-items: center;
`;

const ThreadCol = styled.div`
  ${({ theme }) => theme.flex.col(0.25)}
  flex: 1;
`;

const ThreadTitle = styled.h4`
  color: ${({ theme }) => theme.color.font[1]};
  margin-block: 0;
`;

const ThreadText = styled.p`
  color: ${({ theme }) => theme.color.font[2]};
  margin-block: 0;
`;

export default Thread;
