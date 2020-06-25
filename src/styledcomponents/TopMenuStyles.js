import styled from "styled-components";

export const TopMenuNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: var(--outsidePadding);
  margin-bottom: auto;
  & a {
    border-bottom: 2px solid transparent;
    & + a {
      margin-left: var(--outsidePadding);
    }
    &:hover {
      text-decoration: none;
      font-weight: bold;
    }
    &.on {
      border-bottom-color: var(--text);
    }
  }
`;
