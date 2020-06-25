import styled from "styled-components";

export const Wrapper = styled.main`
  padding: var(--outsidePadding);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;
