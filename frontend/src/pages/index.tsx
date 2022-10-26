import React, { useEffect } from "react";
import Grid from "../components/Grid";
import {
  Container,
  Footer,
  SecondSection,
  ThirdSection,
} from "../styles/HomePageStyles";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap, TimelineLite } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    let tl = new TimelineLite();
    let tl2 = new TimelineLite();

    tl.fromTo(
      ".main-text-h1",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    )
      .fromTo(
        ".main-button",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        ".secondary-button",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
        }
      );

    tl2
      .fromTo(
        [".building-image", ".building-image-mobile"],
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .fromTo(
        ".company-description",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 }
      );

    gsap.fromTo(
      ".first-vision-text",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: ".first-vision-text",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".first-vision-image",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: ".first-vision-image",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".second-vision-text",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: ".second-vision-text",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".second-vision-image",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,

        scrollTrigger: {
          trigger: ".second-vision-image",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  });

  return (
    <Container>
      <div className="dark-background">
        <Grid>
          <section className="company-description">
            <img src="/icons/star.svg" />
            <p>
              A Tokio é uma empresa do ramo de Engenharia Civil localizada em
              São Bernardo do Campo, que oferece serviços de projetos,
              construção, reformas comercial/industrial, e laudos técnicos.
            </p>
          </section>
        </Grid>

        <img className="building-image-mobile" src="/icons/building.png" />
      </div>
      <img className="building-image" src="/icons/building.png" />
      <Grid>
        <div className="header">
          <img src="/icons/logo.svg" />
          <a href="mailto:contato@tokioengenharia.com.br?subject=Orçamento Tokio Engenharia&body=Olá, gostaria de fazer um orçamento">
            entre em contato
          </a>
        </div>
      </Grid>

      <Grid>
        <section className="first-container">
          <aside>
            <section className="user-container">
              <p>Projetos de alto padrão</p>
            </section>

            <div className="main-text">
              <h1 className="main-text-h1">
                A consultoria de engenharia civil certa para você
              </h1>

              <div>
                <button
                  className="main-button"
                  onClick={() => {
                    openInNewTab(
                      "whatsapp://send?text=" +
                        "Gostaria de fazer um orçamento" +
                        "&phone=+5511911647651"
                    );
                  }}
                >
                  Faça um orçamento
                </button>
                <button className="secondary-button">
                  Conheça nossos serviços
                </button>
              </div>
            </div>
          </aside>

          <section className="company-description">
            <img src="/icons/star.svg" />
            <p>
              Tokio é uma empresa do ramo de Engenharia Civil, que oferece
              serviços de gerenciamento de obras, projetos, construção, reformas
              comercial/industrial, e laudos técnicos.
            </p>
          </section>
        </section>
      </Grid>

      <SecondSection>
        <Grid>
          <div>
            <h1>Nosso serviços</h1>
            <p>
              Conheça nosso serviços e como a tókio pode te ajudar a construir
              seu sonho
            </p>
          </div>

          <section>
            <aside>
              <section>
                <div className="services-list1">
                  <h1>Alvenaria</h1>
                  <p>
                    Et aliquip ad consectetur qui velit enim ea quis excepteur
                    laborum occaecat ea minim est.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Fundação</h1>
                  <p>
                    Et aliquip ad consectetur qui velit enim ea quis excepteur
                    laborum occaecat ea minim est.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Contenção</h1>
                  <p>
                    Et aliquip ad consectetur qui velit enim ea quis excepteur
                    laborum occaecat ea minim est.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Estrutura metálica</h1>
                  <p>
                    Et aliquip ad consectetur qui velit enim ea quis excepteur
                    laborum occaecat ea minim est.
                  </p>
                </div>
              </section>
              <section>
                <div className="services-list">
                  <h1>E muito mais</h1>
                  <p>
                    Et aliquip ad consectetur qui velit enim ea quis excepteur
                    laborum occaecat ea minim est.
                  </p>
                </div>
              </section>
              <img src="/images/building.png" />
            </aside>

            <div>
              <img src="/images/building.png" />
            </div>
          </section>
        </Grid>
      </SecondSection>

      <ThirdSection>
        <Grid>
          <section>
            <img
              src="/images/valores.png"
              alt="imagem de prédio"
              className="first-vision-image"
            />

            <aside className="first-vision-text">
              <h1>Nossos valores</h1>
              <p>
                Visamos integridade, respeito, ousadia, sucesso, rentabilidade e
                relacionamento humano.
              </p>
            </aside>
          </section>
          <section className="second-vision-image">
            <aside className="second-vision-text">
              <h1>Nossa visão</h1>
              <p>
                Uma empresa de destaque no que faz, com reconhecimento e
                confiança no mercado e inspirando seus colaboradores e clientes.
              </p>
            </aside>
            <img src="/images/visao.png" alt="imagem de prédio" />
          </section>
        </Grid>
      </ThirdSection>
      <Grid>
        <Footer>
          <section>
            <div>
              <h1>Tokio engenharia</h1>
              <p>
                Uma empresa do ramo de Engenharia Civil, que oferece serviços de
                gerenciamento de obras, projetos, construção e reformas.
              </p>
            </div>
            {process.env.NEXT_PUBLIC_ENV !== "production" && (
              <div>
                <h1>Conheça</h1>

                <p>O que somos?</p>
                <p>Nossos serviços</p>
                <p>Nossos valores</p>
              </div>
            )}

            <div>
              <h1>Contate-nos</h1>

              <a href="mailto:contato@tokioengenharia.com.br?subject=Orçamento Tokio Engenharia&body=Olá, gostaria de fazer um orçamento">
                Enviar email
              </a>
            </div>
          </section>
          <p className="copyright">
            &copy; Todos os direitos reservados {new Date().getFullYear()} •
            Tokio Engenharia
          </p>
        </Footer>
      </Grid>
    </Container>
  );
}
