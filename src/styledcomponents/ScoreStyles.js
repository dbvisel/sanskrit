import styled from "styled-components";

export const ScoreDiv = styled.div`
  margin-bottom: auto;
  & h2 {
    text-align: center;
    padding-bottom: var(--outsidePadding);
    border-bottom: 2px solid var(--text);
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
      padding: 4px 0;
      & span {
        min-width: 120px;
        text-align: center;
      }
    }
  }
  & + div {
    margin-top: var(--outsidePadding);
  }
  @media (max-width: 767px) {
    & h2 {
      font-size: 18px;
    }
    & ul {
      font-size: 16px;
      line-height: 20px;
      & li span {
        min-width: 72px;
      }
    }
  }
`;

export const ScoreSection = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > a {
    margin-top: var(--outsidePadding);
    border-top: 2px solid var(--text);
    padding-top: var(--outsidePadding);
    font-weight: bold;
    width: 100%;
    text-align: center;
    font-size: 24px;
  }
`;
