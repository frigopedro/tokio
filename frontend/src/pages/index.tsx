import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ContactUsModal from "../components/ContactUsModal";
import Grid from "../components/Grid";
import {
  Container,
  FirstSection,
  Footer,
  Header,
  SecondSection,
  ThirdSection,
} from "../styles/HomePageStyles";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesReference = useRef(null);
  const valoresReference = useRef(null);
  const firstSection = useRef(null);
  const executeScroll = (reference: any) =>
    reference && reference.current.scrollIntoView();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [contactUsModal, setContactUsModal] = useState(false);

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
      ".vision-container",
      {
        backgroundColor: " #F2F2F2",
      },
      {
        backgroundColor: "#161616",

        scrollTrigger: {
          trigger: ".vision-container",
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      [".first-vision-h1-text", ".first-vision-p-text"],
      {
        color: " #161616",
      },
      {
        color: "#f1f1f1",

        scrollTrigger: {
          trigger: ".vision-container",
          start: "top top",
          end: "+=100",
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
  }, []);

  return (
    <Container>
      <ContactUsModal
        isOpen={contactUsModal}
        onRequestClose={() => setContactUsModal(false)}
      />
      <Header className="header">
        <Grid>
          <img
            src="/icons/logo.svg"
            alt="Logo Tokio Engenharia"
            loading="lazy"
          />
          <div></div>
        </Grid>
      </Header>

      <FirstSection>
        <div className="sidebar-black" />
        <Grid>
          <img
            className="building-image"
            src="/icons/building.png"
            alt="Imagem de construção"
            loading="lazy"
          />
          <main>
            <h1>Concretizando sonhos</h1>
            <div>
              <button
                className="main-button"
                // onClick={() => {
                //   openInNewTab(
                //     "whatsapp://send?text=" +
                //       "Gostaria de fazer um orçamento" +
                //       "&phone=+5511911647651"
                //   );
                // }}
                onClick={() => setContactUsModal(true)}
              >
                Entre em contato
              </button>
              <button
                className="secondary-button"
                onClick={() => executeScroll(servicesReference)}
              >
                Projetos
              </button>
            </div>
          </main>

          <aside>
            <img src="/icons/star.svg" alt="Icone de estrela" loading="lazy" />

            <p>
              Somos especializados na execução de obras corporativas, comerciais
              e edifícios de alto padrão. Entregamos com excelência projetos de
              alto complexidade em todo território nacional.
            </p>
          </aside>
        </Grid>
      </FirstSection>

      <SecondSection>
        <Grid>
          <div ref={servicesReference}>
            <h1>Projetos</h1>
            {/* <p>
              Conheça nosso serviços e como a tókio pode te ajudar a construir
              seu sonho
            </p> */}
          </div>

          <section>
            <aside>
              <section>
                <div className="services-list">
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
              <div>
                <div className="gradient" />
                <img
                  src="/images/building.png"
                  alt="Imagem de prédio"
                  loading="lazy"
                />
              </div>
            </aside>

            <div>
              <img
                src="/images/building.png"
                alt="Imagem de prédio"
                loading="lazy"
              />
            </div>
          </section>
        </Grid>
      </SecondSection>

      <div
        className="vision-container"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <ThirdSection>
          <Grid>
            <section ref={valoresReference}>
              <img
                src="/images/valores.png"
                alt="imagem de prédio"
                className="first-vision-image"
                loading="lazy"
              />

              <aside className="first-vision-text">
                <h1
                  style={{ textAlign: "end" }}
                  className="first-vision-h1-text"
                >
                  Nossos valores
                </h1>
                <p style={{ textAlign: "end" }} className="first-vision-p-text">
                  Visamos integridade, respeito, ousadia, sucesso, rentabilidade
                  e relacionamento humano.
                </p>
              </aside>
            </section>
            <section className="second-vision-image">
              <aside className="second-vision-text">
                <h1 className="first-vision-h1-text">Nossa visão</h1>
                <p className="first-vision-p-text">
                  Uma empresa de destaque no que faz, com reconhecimento e
                  confiança no mercado e inspirando seus colaboradores e
                  clientes.
                </p>
              </aside>
              <img
                src="/images/visao.png"
                alt="imagem de prédio"
                loading="lazy"
              />
            </section>
          </Grid>
        </ThirdSection>
      </div>
      <Grid>
        <Footer>
          <section>
            <div>
              <h1>Tokio engenharia</h1>
              <p>
                Uma empresa do ramo de Engenharia Civil, que oferece serviços de
                gerenciamento de obras, projetos, construção e reformas.
              </p>
              <address>
                Rua Édson de Castro pinto, 43 - Vila Olímpia-SP <br /> CEP:
                04545-070
              </address>
            </div>
            {process.env.NEXT_PUBLIC_ENV !== "production" && (
              <div>
                <h1>Conheça</h1>

                <a onClick={() => executeScroll(firstSection)}>O que somos?</a>
                <a onClick={() => executeScroll(servicesReference)}>
                  Nossos serviços
                </a>
                <a onClick={() => executeScroll(valoresReference)}>
                  Nossos valores
                </a>
              </div>
            )}

            <div>
              <h1>Contate-nos</h1>

              <a
                href="mailto:contato@tokioengenharia.com.br?subject=Orçamento Tokio Engenharia&body=Olá, gostaria de fazer um orçamento"
                className="contato"
              >
                Email
              </a>
              <a
                href={
                  "whatsapp://send?text=" +
                  "Gostaria de fazer um orçamento" +
                  "&phone=+5511911647651"
                }
                className="contato"
              >
                Whatsapp
              </a>
            </div>
          </section>
          <p className="copyright">
            &copy; Todos os direitos reservados {new Date().getFullYear()} •
            Tokio Engenharia <br />
          </p>
        </Footer>
      </Grid>
    </Container>
  );
}
