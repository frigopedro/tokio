import { useRef } from "react";
import Grid from "../components/Grid";
import { FirstSection, Header } from "../styles/HomePageStyles";

export default function Redesign() {
  const servicesReference = useRef(null);

  const executeScroll = (reference: any) =>
    reference && reference.current.scrollIntoView();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
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
              <button
                className="secondary-button"
                onClick={() => executeScroll(servicesReference)}
              >
                Conheça nossos serviços
              </button>
            </div>
          </main>

          <aside>
            <img src="/icons/star.svg" alt="Icone de estrela" loading="lazy" />

            <p>
              A Tokio é uma empresa do ramo de Engenharia Civil localizada em
              São Bernardo do Campo, que oferece serviços de projetos,
              construção, reformas comercial/industrial, e laudos técnicos.
            </p>
          </aside>
        </Grid>
      </FirstSection>
    </>
  );
}
