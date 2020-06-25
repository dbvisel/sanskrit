import styled from "styled-components";

export const TopMenuNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: var(--outsidePadding);
  margin-bottom: auto;
  flex-wrap: wrap;
  & a {
    border-bottom: 2px solid transparent;
    white-space: nowrap;
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
  @media (max-width: 767px) {
    font-size: 12px;
    & a {
      border-bottom: 1px solid transparent;
    }
  }
`;
