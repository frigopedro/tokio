import React from "react";
import Grid from "../components/Grid";
import { Container } from "../styles/HomePageStyles";
import ReactWhatsapp from "react-whatsapp";

export default function Home() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
              <h1>Consultoria de engenharia civil certa para você</h1>

              <div>
                <button
                  className="main-button"
                  onClick={() => {
                    openInNewTab(
                      "whatsapp://send?text=" +
                        "Gostaria de fazer um orçamento" +
                        "&phone=+5511989076923"
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
              A Tokio é uma empresa do ramo de Engenharia Civil localizada em
              São Bernardo do Campo, que oferece serviços de projetos,
              construção, reformas comercial/industrial, e laudos técnicos.
            </p>
          </section>
        </section>
      </Grid>
    </Container>
  );
}
