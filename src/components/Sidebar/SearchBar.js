import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components/macro";

const SearchBar = styled(({ className, ...props }) => (
  <div className={className}>
    <SearchIcon />
    <SearchInput {...props} />
  </div>
))`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.bg[2]};
  outline: 0.25rem solid ${({ theme }) => theme.color[1]};
  border-radius: 0.75rem;
  padding: 0.7rem 1rem;
`;

const searchIconSize = "1.5rem";
const SearchIcon = styled(({ className }) => (
  <BiSearch className={className} />
))`
  color: ${({ theme }) => theme.color.icon[2]};
  width: ${searchIconSize};
  height: ${searchIconSize};
  margin-right: 0.4rem;
`;

const SearchInput = styled(({ className, ...props }) => (
  <input className={className} type="text" {...props} />
))`
  display: flex;
  flex: 1;
  background: none;
  color: ${({ theme }) => theme.color.font[1]};
  border: 0;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: ${({ theme }) => theme.color.font[2]};
  }
`;

export default SearchBar;
