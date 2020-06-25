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
`;
