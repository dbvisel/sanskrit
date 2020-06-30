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

export const TopMenuNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: var(--outsidePadding);
  margin-bottom: auto;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--backdrop);
  position: relative;
  align-items: center;
  font-size: 24px;
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
