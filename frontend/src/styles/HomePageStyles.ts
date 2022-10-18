import styled from "styled-components";

export const Container = styled.div`
  .dark-background {
    height: 100vh;
    background-color: #161616;
    width: 40%;
    position: absolute;
    z-index: -4;
    right: 0%;
    > main {
      display: none;
    }
  }
  .building-image {
    position: absolute;
    z-index: -3;
    right: 0%;
    bottom: 0%;
    width: 60vw;
    max-width: 1250px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 0;

    a {
      text-decoration: none;
      color: #fc6b24;
    }
  }
  .user-container {
    display: flex;
    gap: 1rem;
    align-items: center;

    > img {
      width: 70px;
    }

    h1 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }

  .main-text {
    margin-top: 1rem;
    h1 {
      font-size: clamp(16px, 5.5vw, 80px);
      max-width: 60%;
    }

    > div {
      margin-top: 100px;
      display: flex;
      gap: 2rem;
    }
    .main-button {
      background-color: #fc6b24;
      border: none;
      border-radius: 100px;
      color: white;
      padding: 0.5rem 2rem;

      box-shadow: 2px 2px 15px rgba(252, 107, 36, 0.25);
    }

    .secondary-button {
      background-color: transparent;
      border: none;
      color: #fc6b24;
    }
  }
  .first-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    > section {
      margin-top: 200px;
      max-width: 332px;
      background-color: #161616;
      max-height: 300px;
      border-radius: 25px;
      padding: 1rem;
      p {
        color: #f1f1f1;
      }
    }
  }

  @media (max-width: 768px) {
    .first-container {
      margin-top: 1rem;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
      > section {
        display: none;
      }
    }
    .main-text {
      h1 {
        font-size: 2.5rem;
        max-width: 100%;
      }
      > div {
        margin-top: 1rem;
      }
    }
    .dark-background {
      width: 100vw;
      height: 50vh;
      top: clamp(450px, 50%, 50%);
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      > main {
        display: block;
      }
      p {
        color: #f1f1f1;
      }
    }
    .building-image-mobile {
      display: none;
      @media (max-width: 768px) {
        margin-top: auto;
        display: block;
        width: 100vw;
      }
    }
    .building-image {
      width: 100vw;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
