import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.5rem;
    }
  }
`;
