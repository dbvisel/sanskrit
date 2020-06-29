import styled from "styled-components";

export const OuterWrapper = styled.div`
  display: flex;
  transition: 1s;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  &.on {
    transform: translateX(-375px);
    & main {
      /* width: calc(100vw - 375px); */
    }
  }
`;

export const Wrapper = styled.main`
  padding: var(--outsidePadding);
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

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

export const SettingsDiv = styled.div`
  margin-bottom: auto;
  & p {
    margin: 0 0 var(--outsidePadding) 0;
  }
  & label {
    display: inline-flex;
    align-items: baseline;
    user-select: none;
    & input[type="checkbox"] {
      margin-right: 5px;
    }
    + label input[type="checkbox"] {
      margin-left: 10px;
    }
  }
`;

export const TopMenuNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: var(--outsidePadding);
  margin-bottom: auto;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--backdrop);
  position: relative;
  & span {
    font-size: 24px;
  }
  & a {
    position: absolute;
    right: 0;
    margin-left: auto;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    &:hover {
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
