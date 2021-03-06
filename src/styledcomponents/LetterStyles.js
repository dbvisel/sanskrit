import styled from "styled-components";

export const BigCharacter = styled.span`
  font-size: 25vmin;
  font-family: var(--sanskritFont);
  user-select: none;
`;

export const ChoicesButtons = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & li {
    ${(props) =>
      props.category === "sa" ? "font-family: var(--sanskritFont);" : null}
    font-size: 24px;
    border-radius: var(--insidePadding);
    font-weight: ${(props) => (props.category === "sa" ? "normal" : "bold")};
    margin: var(--insidePadding);
    padding: 2px 6px;
    display: inline-flex;
    min-width: 36px;
    justify-content: center;
    border: 2px solid var(--text);
    cursor: pointer;
    user-select: none;
    transition: 0.25s;
    &.on {
      background-color: var(--text);
      color: var(--backdrop);
      cursor: initial;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
    }
    &:hover {
      background-color: var(--text);
      color: var(--backdrop);
    }
  }
  @media (max-width: 767px) {
    & li {
      font-size: 16px;
      margin: 4px;
      padding: 1px 3px;
      border-width: 1px;
      font-weight: normal;
      &:hover {
        color: var(--text);
        background-color: var(--backdrop);
      }
    }
  }
`;
