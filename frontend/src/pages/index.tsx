import React, { useEffect } from "react";
import Grid from "../components/Grid";
import {
  Container,
  SecondSection,
  ThirdSection,
} from "../styles/HomePageStyles";
import ReactWhatsapp from "react-whatsapp";
import Typed from "react-typed";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap, TimelineLite } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // gsap.to(".service-list1", {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".service-list1",
    //     start: "top 20%",
    //     end: "+=100",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  });

  return (
    <Container>
      <div className="dark-background">
        <Grid>
          <section>
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
              <h1>A consultoria de engenharia civil certa para você</h1>

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

          <section>
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

      <ThirdSection></ThirdSection>
    </Container>
  );
}
