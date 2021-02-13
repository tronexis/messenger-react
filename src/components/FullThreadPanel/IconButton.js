import React from "react";
import styled from "styled-components/macro";

export const IconButton = styled(({ icon, ...props }) => (
  <button {...props}>{icon()}</button>
))`
  ${({ theme }) => theme.btn.icon}
`;

export const IconButtonGroup = styled.div`
  ${({ theme }) => theme.flex.row(1)}
  align-items: center;
`;

export default IconButton;
