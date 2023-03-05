import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  width: 700px;
  height: 500px;

  max-height: 70vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;
