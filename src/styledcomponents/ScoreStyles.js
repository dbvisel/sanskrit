import styled from "styled-components";

export const ScoreDiv = styled.div`
  margin-bottom: auto;
  & h2 {
    text-align: center;
  }
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 30px;
    & li {
      display: flex;
      justify-content: space-between;
      & span {
        min-width: 120px;
        text-align: center;
      }
    }
  }
  & + div {
    margin-top: var(--outsidePadding);
  }
`;

export const ScoreSection = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    margin-top: var(--outsidePadding);
  }
`;
