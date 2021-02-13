import React from "react";
import { MdAttachFile, MdInsertEmoticon, MdMic } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import styled from "styled-components/macro";
import IconButton, { IconButtonGroup } from "./IconButton";

const SendMessageBar = (props) => {
  return (
    <Container>
      <IconButtonGroup>
        <IconButton icon={MdAttachFile} />
        <IconButton icon={MdInsertEmoticon} />
      </IconButtonGroup>
      <MessageInput placeholder="Write a message..." />
      <IconButtonGroup>
        <IconButton icon={MdMic} />
        <IconButton icon={RiSendPlaneFill} />
      </IconButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.row(1)}
  padding: 1rem;
  background: ${({ theme }) => theme.color.bg[2]};
  border-radius: 0.75rem;
`;

const MessageInput = styled.input`
  ${({ theme }) => theme.input}
`;

export default SendMessageBar;
