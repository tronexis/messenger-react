import React from "react";
import styled from "styled-components/macro";

export const Badge = styled((props) => (
  <div className={props.className}>{props.children}</div>
))`
  display: flex;
  background: ${({ theme }) => theme.color.badge[1]};
  color: ${({ theme }) => theme.color.font[1]};
  font-size: ${({ size }) => 5 * parseInt(size)}px;
  font-weight: 800;
  line-height: 1;
  padding: 0.3rem 0.55rem 0.35rem 0.5rem;
  border-radius: 20rem;
  align-items: center;
  justify-content: center;
`;

export const Timestamp = styled.small`
  color: ${({ theme }) => theme.color.font[2]};
`;
