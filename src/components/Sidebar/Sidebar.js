import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components/macro";
import Nav from "./Nav";

const Sidebar = (props) => (
  <Container>
    <Avatar>M</Avatar>
    <Nav />
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKRod7YxXymW_pnW8GNHx1hHhBbKGRIf1Vw&usqp=CAU" />
  </Container>
);

const sidebarWidth = "5rem";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  min-width: ${sidebarWidth};
  max-width: ${sidebarWidth};
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.color.bg[2]};
`;

export default Sidebar;
