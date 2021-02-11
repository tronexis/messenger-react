import React from "react";
import styled from "styled-components/macro";
import { Badge } from "./../Styles/UI";

const BadgedTitle = styled(({ className, title, count, ...props }) => (
  <div className={className}>
    <Title>{title}</Title>
    <Badge size="3">{count}</Badge>
  </div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

const Title = styled.h2`
  margin-block: 0;
  margin-right: 0.8rem;
  padding-bottom: 0.5rem;
`;

export default BadgedTitle;
