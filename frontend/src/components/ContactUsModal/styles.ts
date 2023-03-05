import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .gmap_canvas {
    padding-top: 1rem;
    height: 100%;

    > iframe {
      border: none;
    }
  }
  > header {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    > h1 {
      font-size: 1.8rem;
    }
    > p {
      text-align: center;
    }
    > div {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
  }

  > section {
    margin-top: 2rem;
    display: flex;
    > div,
    a {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-decoration: none;

      border-radius: 12px;
      padding: 0.5rem;
      cursor: pointer;
      overflow: hidden;
      flex-basis: 33.33%;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      > svg {
        position: absolute;
        top: 0.5rem;
        left: 0;
        right: 0;
        margin: auto;
      }

      &:hover {
        background: #fc6b2410;
      }
      > h3 {
        padding-top: 40px;

        font-size: 0.875rem;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
