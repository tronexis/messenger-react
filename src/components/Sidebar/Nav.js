import React from "react";
import styled from "styled-components/macro";
import {
  Notifications,
  CalendarToday,
  Chat,
  Favorite,
  ExitToApp,
} from "@material-ui/icons";
import NavLink from "./NavLink";

const Nav = (props) => {
  return (
    <Container>
      <NavLink Icon={Notifications} badge />
      <NavLink Icon={CalendarToday} />
      <NavLink Icon={Chat} />
      <NavLink Icon={Favorite} />
      <NavLink Icon={ExitToApp} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  ${({ theme }) => theme.spacing.col(1)}
`;

export default Nav;
