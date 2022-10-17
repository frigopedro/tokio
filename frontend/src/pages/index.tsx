import React from "react";
import Grid from "../components/Grid";
import { Container } from "../styles/HomePageStyles";

export default function Home() {
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
      </div>
      <img className="building-image" src="/icons/building.png" />
      <Grid>
        <div className="header">
          <img src="/icons/logo.svg" />
          <a href="mailto:contato@tokioengenharia.com.br">entre em contato</a>
        </div>
      </Grid>

      <Grid>
        <section className="first-container">
          <aside>
            <section>
              <aside className="user-container">
                <img src="/icons/rafael.png" />
                <div>
                  <h1>Rafael Marques Amaral</h1>
                  <p>Engenheiro Civil</p>
                </div>
              </aside>
            </section>

            <div className="main-text">
              <h1>Consultoria de engenharia civil certa para você</h1>

              <div>
                <button className="main-button">Entre em contato</button>
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
