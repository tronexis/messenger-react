import React from "react";
import styled from "styled-components/macro";
import { Avatar } from "@material-ui/core";
import { MdMoreVert, MdPersonOutline, MdSearch } from "react-icons/md";
import IconButton, { IconButtonGroup } from "./IconButton";

const ThreadHeader = (props) => {
  return (
    <Container>
      <Avatar />
      <ThreadRow>
        <ThreadCol>
          <ThreadTitle>Mikasa Ackerman</ThreadTitle>
          <ThreadText>Last Seen Today 5:40pm</ThreadText>
        </ThreadCol>
        <IconButtonGroup>
          <IconButton icon={MdSearch} />
          <IconButton icon={MdPersonOutline} />
          <IconButton icon={MdMoreVert} />
        </IconButtonGroup>
      </ThreadRow>
    </Container>
  );
};

const Container = styled.header`
  ${({ theme }) => theme.flex.row(1)}
  padding: 1rem;
  align-items: center;
`;

const ThreadCol = styled.div`
  ${({ theme }) => theme.flex.col(0.25)}
`;

const ThreadRow = styled.div`
  ${({ theme }) => theme.flex.row(0)}
  flex: 1;
  justify-content: space-between;
`;

const ThreadTitle = styled.h4`
  ${({ theme }) => theme.text.title}
`;

const ThreadText = styled.p`
  ${({ theme }) => theme.text.subtitle}
`;

export default ThreadHeader;
