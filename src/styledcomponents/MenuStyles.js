import styled from "styled-components";

export const ModalMenu = styled.div`
  position: relative;
  width: 375px;
  max-width: 100vw;
  top: 0;
  bottom: 0;
  border-left: 1px solid var(--text);
  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    & li {
      transition: 0.5s;
      & a {
        padding: var(--outsidePadding);
        height: 40px;
        width: 100%;
        display: inline-flex;
        align-items: center;
        transition: 0.5s;
        &:hover {
          text-decoration: none;
          font-weight: bold;
        }
      }
      &:hover {
        background-color: var(--text);
        color: var(--backdrop);
        & a {
          color: var(--backdrop);
        }
      }
      & + li {
        border-top: 1px solid var(--text);
      }
    }
  }
  & > div {
    height: 100%;
    width: 100%;
  }
`;

export const SettingDiv = styled.div`
  padding: 0 var(--outsidePadding) var(--insidePadding);
  width: 100%;
  display: flex;
  flex-direction: column;
  & p {
    min-height: 20px;
    margin: 0;
    font-size: 13px;
    line-height: 20px;
    display: inline-flex;
    align-items: baseline;
    flex-wrap: wrap;
    & strong {
      margin-top: var(--insidePadding);
    }
    & label {
      display: inline-flex;
      align-items: baseline;
      user-select: none;
      margin-right: 10px;
      & input[type="checkbox"] {
        margin-right: 5px;
        position: relative;
        top: 2px;
      }
      + label input[type="checkbox"] {
      }
    }
  }
`;

export const MultipleLabel = styled.label``;
