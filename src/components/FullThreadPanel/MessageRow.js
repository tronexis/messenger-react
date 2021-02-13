import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import { BiCheckDouble } from "react-icons/bi";

const message =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia, aliquam quisquam eaque corrupti distinctio minus dolor debitis aperiam magni inventore consectetur voluptatibus voluptatem molestias esse officiis. Culpa, iusto cupiditate.";
const MessageRow = (props) => {
  return (
    <Container user={props.user}>
      <Avatar />
      <Message user={props.user} message={message} time="2:08pm" />
    </Container>
  );
};

const Container = styled.div`
  ${({ theme, user }) => (user ? theme.flex.rowReverse(1) : theme.flex.row(1))}
  align-items: flex-end;
`;

const Message = styled(({ className, message, time, user, ...props }) => (
  <div className={className} {...props}>
    <MessageText>{message}</MessageText>
    <MessageTime user={user}>
      {user ? <SeenIcon /> : ""}
      <span>{time}</span>
    </MessageTime>
  </div>
))`
  ${({ theme }) => theme.flex.col(0.25)}
  max-width: 50%;
  padding: 1rem;
  border-radius: 0.75rem;
  background: ${({ theme, user }) =>
    user ? theme.color[1] : theme.color.bg[2]};
`;

const MessageText = styled.p`
  color: ${({ theme }) => theme.color.font[1]};
`;

const MessageTime = styled.small`
  ${({ theme }) => theme.flex.row(0.5)}
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  color: ${({ theme, user }) =>
    user ? theme.color.font[1] : theme.color.font[2]};
`;

const SeenIcon = styled((props) => <BiCheckDouble {...props} />)`
  font-size: 1rem;
`;

export default MessageRow;
