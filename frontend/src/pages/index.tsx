import React from "react";
import { Container } from "../styles/HomePageStyles";

export default function Home() {
  const pdfUrl = "/tokioengenharia.pdf"; // Replace with the actual path

  return (
    <Container>
      <div>
        <p>seja bem vindo</p>
        <h1>Ainda estamos em construção</h1>
        <a href="mailto:contato@tokioengenharia.com.br">
          contato@tokioengenharia.com.br
        </a>

        <a
          href={pdfUrl}
          className="know-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </div>
    </Container>
  );
}
