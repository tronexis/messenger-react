import React from "react";
import { Badge, Button, withStyles } from "@material-ui/core";
import * as $ from "./../Styles/Styles";

const NavLink = ({ Icon, badge, ...rest }) => {
  return (
    <MuiButton theme="5rem" color="primary" {...rest}>
      <Badge
        color="secondary"
        overlap="circle"
        variant="dot"
        invisible={!badge}
      >
        <Icon />
      </Badge>
    </MuiButton>
  );
};

const navLinkSize = 50;

const MuiButton = withStyles((theme) => ({
  root: {
    color: $.theme.color.icon[1],
    minWidth: navLinkSize,
    minHeight: navLinkSize,
    borderRadius: 10,
    margin: ".25rem",
    "&:hover, &:focus": {
      backgroundColor: $.theme.color[1],
      color: "#fff",
    },
  },
}))(Button);

export default NavLink;
