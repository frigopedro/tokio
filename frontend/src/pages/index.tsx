import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ContactUsModal from "../components/ContactUsModal";
import Grid from "../components/Grid";
import {
  Container,
  FirstSection,
  Footer,
  ForthSection,
  Header,
  SecondSection,
  ThirdSection,
} from "../styles/HomePageStyles";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface ImagesGallery {
  src: string;
  title: string;
  description: string;
}
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

  const [selectedImage, setSelectedImage] = useState<ImagesGallery | null>(
    null
  );

  //      <img className="image" src="./images/showcase1.jpg" />

  const images: ImagesGallery[] = [
    {
      src: "./images/showcase1.jpg",
      title: "Construção da Fundação",
      description:
        "Um processo meticuloso de fundação, destacando nossa expertise em garantir estabilidade estrutural e segurança para projetos de grande escala.",
    },
    {
      src: "./images/showcase2.jpg",
      title: "Sistema de Contenção de Terra",
      description:
        "Implementação de técnicas avançadas de contenção de terra, proporcionando suporte essencial e segurança durante escavações profundas.",
    },
    {
      src: "./images/showcase3.jpg",
      title: "Montagem de Estrutura Metálica",
      description:
        "Precisão em ação enquanto nossa equipe monta uma robusta estrutura metálica, preparando o terreno para uma construção durável e resiliente.",
    },
    {
      src: "./images/showcase4.jpg",
      title: "Instalação de Laje de Concreto Armado",
      description:
        "Preparando o terreno para força e longevidade, esta imagem captura nossa equipe em ação durante a instalação de uma laje de concreto armado.",
    },
    {
      src: "./images/showcase6.jpg",
      title: "Alvenaria e Andaimes",
      description:
        "Demonstrando nosso compromisso com a qualidade, esta imagem exibe a cuidadosa construção de paredes de tijolos, apoiadas por um sistema de andaimes bem projetado.",
    },
    {
      src: "./images/showcase5.jpg",
      title: "Instalação de Encanamento",
      description:
        "Um vislumbre de nossa abordagem meticulosa nas instalações hidráulicas, garantindo sistemas de água eficientes e confiáveis em cada projeto.",
    },
    {
      src: "./images/showcase7.jpg",
      title: "Sistema de Proteção Contra Incêndio",
      description:
        "Instalação de um sistema de proteção contra incêndio de última geração, crucial para garantir segurança e conformidade em edifícios comerciais e industriais.",
    },
    {
      src: "./images/showcase8.jpg",
      title: "Infraestrutura Interna",
      description:
        "Um olhar nos bastidores sobre a complexa rede de instalações elétricas e mecânicas que formam a espinha dorsal de edifícios modernos.",
    },
    {
      src: "./images/showcase11.jpg",
      title: "Painel de Controle Elétrico",
      description:
        "Engenharia de precisão em seu melhor, enquanto nossa equipe configura um painel de controle elétrico para garantir uma distribuição de energia confiável em todo o projeto.",
    },
    {
      src: "./images/showcase9.jpg",
      title: "Sistema de Gerenciamento de Cabos",
      description:
        "Gerenciamento eficaz de cabos em andamento, ilustrando nossa dedicação à organização e segurança nas instalações elétricas.",
    },
    {
      src: "./images/showcase10.jpg",
      title: "Sistema de Distribuição de Ar",
      description:
        "Instalação do sistema de distribuição de ar, essencial para a circulação adequada de ar em edifícios comerciais e industriais.",
    },
    {
      src: "./images/showcase14.jpg",
      title: "Quadro Elétrico",
      description:
        "Configuração de um quadro elétrico avançado, garantindo que a distribuição de energia seja feita de forma segura e eficiente.",
    },
    {
      src: "./images/showcase13.jpg",
      title: "Infraestrutura de Condomínios",
      description:
        "Desenvolvimento de infraestrutura em condomínios, garantindo acesso a serviços essenciais e conectividade para todos os moradores.",
    },
    {
      src: "./images/showcase12.jpg",
      title: "Instalação de Tubulações",
      description:
        "Processo de instalação de tubulações em ambientes industriais, garantindo a condução eficiente de fluidos e gases.",
    },
  ];

  useEffect(() => {
    ScrollTrigger.saveStyles(".image");

    ScrollTrigger.matchMedia({
      "(min-width:200px)": function () {
        var grids = document.querySelectorAll(".images");

        grids.forEach(function (grid) {
          var imageEffect = gsap.timeline({
            scrollTrigger: {
              trigger: grid,
              start: "top 20%",
              end: "bottom 20%",
              scrub: 1,
            },
          });

          var allImages = grid.querySelectorAll(".image"),
            $largeImages = grid.querySelectorAll(
              ".image:nth-child(4n), .image:nth-child(4n+1)"
            ),
            $smallImages = [...allImages].filter(
              (f) => ![...$largeImages].includes(f)
            );

          imageEffect
            .to($smallImages, { duration: 2, width: "33%", ease: "power1" })
            .to(
              $largeImages,
              { duration: 2, width: "66%", ease: "power1" },
              "<"
            );
        });
      },
    });
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
            <h1>Construindo Legados</h1>
            <img className="target" src="/images/target.png" alt="" />
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
              Especialistas em dar vida a estruturas complexas e projetos
              desafiadores. Da concepção ao acabamento, cada etapa é conduzida
              com rigor técnico e atenção ao detalhe, garantindo resultados que
              não apenas atendem, mas superam expectativas.
            </p>
          </aside>
        </Grid>
      </FirstSection>

      <SecondSection>
        <Grid>
          <div ref={servicesReference}>
            <h1>Especializados</h1>
            <p>
              Conheça nosso serviços e como a tókio pode te ajudar a construir
              seu sonho
            </p>
          </div>

          <section>
            <aside>
              <section>
                <div className="services-list">
                  <h1>Alvenaria</h1>
                  <p>
                    Construção segura e durável de paredes de tijolo, blocos e
                    pedra.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Fundação</h1>
                  <p>
                    Soluções personalizadas para garantir uma fundação forte o
                    suficiente para suportar o peso da sua estrutura.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Contenção</h1>
                  <p>
                    Nós garantimos a estabilidade de solos, estruturas e
                    encostas para proteger sua construção.
                  </p>
                </div>
              </section>

              <section>
                <div className="services-list">
                  <h1>Estrutura metálica</h1>
                  <p>
                    Projetamos e fabricamos estruturas metálicas fortes, seguras
                    e esteticamente agradáveis.
                  </p>
                </div>
              </section>
              <section>
                <div className="services-list">
                  <h1>E muito mais</h1>
                  <p>
                    Oferecemos uma ampla variedade de serviços de consultoria de
                    engenharia, incluindo planejamento, gerenciamento de
                    projetos, avaliação estrutural, análise de sistemas
                    mecânicos, elétricos e hidráulicos, entre outros.
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
        <Container>
          <span>
            <ForthSection>
              <div className="gallery">
                <h1>Nossos Projetos</h1>
                <p>
                  Conheça alguns dos nossos projetos em andamento e concluídos.
                </p>
                <div className="images">
                  {images.map((src, index) => (
                    <motion.img
                      key={index}
                      src={src.src}
                      className="image"
                      onClick={() => setSelectedImage(src)}
                      whileHover={{ scale: 1.01 }}
                      layoutId={src.src}
                    />
                  ))}
                </div>
              </div>
            </ForthSection>
          </span>
        </Container>
      </Grid>
      <Grid>
        <Footer>
          <section>
            <div>
              <h1>Tokio engenharia</h1>
              <p>
                A Tokio Engenharia iniciou suas atividades em 2012 e de lá para
                cá, já executou diversas obras e tem se destacado pela qualidade
                dos serviços que executa, resultando em excelentes índices de
                satisfação de seus clientes. Com mais de 12 anos de experiência
                na construção civil, atendendo aos diversos segmentos do mercado
                e produzindo, especialmente, empreendimentos que se destacam
                pela qualidade e inovação arquitetônica. Sempre com conceito de
                modernidade, o principal objetivo são os projetos que se adequam
                ao estilo e necessidade de cada cliente. adequam ao estilo e
                necessidade de cada cliente.
              </p>
              <address>
                Rua Édson de Castro pinto, 44 - Vila Olímpia-SP <br /> CEP:
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="modal-content" layoutId="selected-image">
              <motion.img
                src={selectedImage.src}
                className="modal-image"
                layoutId={selectedImage.src}
              />
              <div className="modal-text">
                <h1>{selectedImage.title}</h1>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
