import styled from "styled-components";

export const Container = styled.div`
  .know-more {
    background-color: #fc6b24;
    padding: 0.5rem 2rem;
    border-radius: 100px;
    color: white;
    text-decoration: none;
    display: block;
    margin-top: 1rem;
    text-align: center;
    box-shadow: 2px 2px 15px rgba(252, 107, 36, 0.25);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    > p {
      font-size: 1.5rem;
    }
    > h1 {
      font-size: 3rem;
      text-align: center;
    }
    > a {
      color: #fc6b24;
      text-decoration: none;
    }
  }
`;
export const Header = styled.div`
  main {
    display: flex;
    justify-content: space-between;
    padding-right: 0;

    > img {
      padding-top: 24px;
      padding-bottom: 24px;
      width: 300px;
    }
    > div {
      width: 40%;
      background-color: #161616;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
export const FirstSection = styled.div`
  .sidebar-black {
    background-color: #161616;
    position: absolute;
    height: 60vh;
    max-height: calc(1200px * 0.6);
    left: calc((100vw - 1472px) / 2 + 1430px);
    right: 0;
    top: 0;
    z-index: -1;
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
  }
  @media (max-width: 1472px) {
    .sidebar-black {
      display: none;
    }
  }
  > main {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    max-height: 1200px;
    top: 0;
    margin: 0 auto;
    position: relative;
    padding-right: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      display: block;
      padding-left: 0;
      justify-content: space-around;
      gap: 1rem;
    }

    .building-image {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 32px;
      padding-right: 0;
      width: 100%;
      padding-bottom: 0;
      max-height: 60vh;
    }

    > main {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      max-height: 60%;
      /* overflow: hidden; */
      @media (max-width: 768px) {
        padding: 0 16px;
        max-height: 40%;
        height: 100%;
      }

      > h1 {
        margin-top: 200px;
        font-size: clamp(16px, 60vw, 90px);
        @media (max-width: 1260px) {
          font-size: clamp(16px, 60vw, 70px);
        }
        @media (max-width: 1160px) {
          font-size: clamp(16px, 60vw, 58px);
        }

        @media (max-width: 768px) {
          margin-top: 0px;

          font-size: clamp(16px, 60vw, 48px);
          text-align: center;
        }
      }

      > div {
        margin-top: 100px;
        display: flex;
        gap: 2rem;
        align-items: center;
        @media (max-width: 768px) {
          margin-top: 20px;
        }
      }
      .main-button {
        background-color: #fc6b24;
        border: none;
        border-radius: 100px;
        color: white;
        display: block;
        padding: 0.5rem 2rem;
        font-size: 1rem;
        box-shadow: 2px 2px 15px rgba(252, 107, 36, 0.25);
        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }

      .secondary-button {
        background-color: transparent;
        border: none;
        color: #fc6b24;
        font-size: 1rem;

        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
    > aside {
      background-color: #161616;
      max-width: 40%;
      min-width: 40%;
      width: 100%;
      padding: 16px;
      height: 100%;
      @media (max-width: 768px) {
        max-width: 100%;
        max-height: 60%;
      }
      > p {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: #f1f1f1;
      }
    }
  }
`;

export const SecondSection = styled.div`
  margin-top: 100px;
  .services-list {
    padding: 1rem;
    background-image: url(${"https://firebasestorage.googleapis.com/v0/b/depcom-a4032.appspot.com/o/tokio%2Fblocks.svg?alt=media&token=c8644ac8-6611-4f8b-934c-bb79bffbf1f7"});
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
        top: 0px;
        max-width: 900px;
        height: 100vh;

        overflow: hidden;
        display: flex;
        img {
          margin-top: auto !important;
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
                #f2f2f2 56.18%,
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
  min-height: 70vh;

  overflow: hidden;
  display: flex;
  align-items: center;
  > main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
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
