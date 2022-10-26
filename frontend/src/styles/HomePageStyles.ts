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
    width: 50vw;
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
    padding: 0.5rem 1.5rem;
    border: 1px solid #333333;
    border-radius: 100px;
    display: inline-block;
    > p {
      color: #333333;
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
      margin-top: 10vh;
      max-width: 332px;
      background-color: #161616;
      max-height: 220px;
      border-radius: 25px;
      padding: 1rem;
      p {
        color: #f1f1f1;
      }
    }
  }

  .building-image-mobile {
    display: none;
    width: 0px;
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
        text-align: center;
      }
      > div {
        justify-content: space-around;
        margin-top: 2rem;
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
      margin-top: auto;
      display: flex;
      width: 100vw;
    }

    .building-image {
      width: 100vw;
      @media (max-width: 768px) {
        display: none;
      }
    }

    .user-container {
      margin: 0 auto;
    }
  }
`;

export const SecondSection = styled.div`
  margin-top: 300px;

  @media (max-width: 768px) {
    margin-top: 650px;
  }
  main {
    > div {
      margin: 0 auto;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 2rem;
      }
      > p {
        text-align: center;
      }
    }

    > section {
      margin-top: 100px;
      height: 300vh;
      display: flex;
      justify-content: space-between;

      > aside {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        > section {
          flex: 1;
          > div {
            position: sticky;
            top: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 500px;
            > p {
              text-align: center;
            }
            > h1 {
              font-size: 1.2rem;
              position: sticky;
            }
          }
        }

        > div {
          display: none;
        }
      }
      > div {
        position: sticky;
        top: 400px;
        max-width: 900px;
        max-height: 600px;
        overflow: hidden;

        img {
          max-width: 800px;
          max-height: 600px;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        > aside {
          height: 300vh;
          gap: 3rem;
          > div {
            display: block;
            width: 100%;
            position: sticky;
            bottom: 0;
            > div {
              width: 100%;
              height: 300px;
              position: relative;
              top: 0;
              background: linear-gradient(
                0deg,
                #f2f2f2 7.21%,
                rgba(242, 242, 242, 0.25) 103.66%
              );
              z-index: -1;
            }
            > img {
              margin-top: -300px;
              width: 100%;
            }
          }
        }
        > div {
          display: none;
        }
      }
    }
  }
`;

export const ThirdSection = styled.div`
  background-color: #161616;
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  > main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > section {
      display: flex;
      gap: 3rem;
      align-items: center;
      justify-content: space-between;

      > img {
        width: 40vw;
        height: 40vw;
        max-width: 500px;
        max-height: 500px;
        border-radius: 12px;
        border: 12px solid #f1f1f120;
      }
      > aside {
        max-width: 600px;
      }
      p {
        color: #f1f1f190;
      }
      h1 {
        color: #f1f1f1;
      }
    }
  }

  @media (max-width: 768px) {
    > main {
      > section {
        gap: 0.5rem;

        > img {
          border: 5px solid #f1f1f120;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 3rem;

  section {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;
    > div {
      max-width: 400px;
      display: flex;
      flex-direction: column;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.lightText};
  }

  .contato {
    color: #fc6b24;
  }
  .copyright {
    margin-top: 3rem;
    margin-bottom: -1rem;
  }
`;
