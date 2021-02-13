import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components/macro";
import Nav from "./Nav";
import { RiChatSmile3Fill } from "react-icons/ri";

const Navbar = (props) => (
  <Container>
    <Logo />
    <Nav />
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKRod7YxXymW_pnW8GNHx1hHhBbKGRIf1Vw&usqp=CAU" />
  </Container>
);

const navbarWidth = "5rem";
const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  min-width: ${navbarWidth};
  max-width: ${navbarWidth};
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.color.bg[2]};
`;

const Logo = styled((props) => (
  <Avatar {...props}>
    <RiChatSmile3Fill />
  </Avatar>
))`
  background: ${({ theme }) => theme.color.bg[1]} !important;
  color: ${({ theme }) => theme.color.icon[1]} !important;
`;

export default Navbar;
