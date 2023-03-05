import React from "react";
import ModalTemplate from "../ModalTemplate";
import { Container } from "./styles";
import { BsFillPinMapFill, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { toast } from "react-toastify";

interface ContactUsModalType {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ContactUsModal(props: ContactUsModalType) {
  return (
    <ModalTemplate isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
      <Container>
        <header>
          <h1>Entre em contato</h1>
          <p>
            Entre em contato conosco para obter soluções personalizadas para
            suas necessidades de engenharia.
          </p>
          <div onClick={props.onRequestClose}>
            <CgClose size={24} />
          </div>
        </header>
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Rua Édson de Castro pinto, 43&t=&z=14&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <section>
          <div
            onClick={() => {
              navigator.clipboard.writeText(
                "Rua Édson de Castro pinto, 43 - Vila Olímpia-SP CEP:04545-070"
              );
              toast.info("Endereço copiado com sucesso");
            }}
          >
            <BsFillPinMapFill size={32} color="#FC6B24" />
            <h3>Rua Édson de Castro pinto, 43</h3>
          </div>
          <a
            href={
              "whatsapp://send?text=" +
              "Gostaria de fazer um orçamento" +
              "&phone=+5511911647651"
            }
            onClick={() => {
              navigator.clipboard.writeText("+5511911647651");
              toast.info("Número copiado com sucesso");
            }}
          >
            <BsWhatsapp size={32} color="#FC6B24" />
            <h3>+55 11 91164-7651</h3>
          </a>
          <a
            href="mailto:contato@tokioengenharia.com.br?subject=Orçamento Tokio Engenharia&body=Olá, gostaria de fazer um orçamento"
            onClick={() => {
              navigator.clipboard.writeText("contato@tokioengenharia.com.br");
              toast.info("Email copiado com sucesso");
            }}
          >
            <HiOutlineMail size={32} color="#FC6B24" />
            <h3>contato@tokioengenharia.com.br</h3>
          </a>
        </section>
      </Container>
    </ModalTemplate>
  );
}
