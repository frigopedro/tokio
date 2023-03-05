import { ReactNode, useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface ModalTemplateType {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: ReactNode;
  contentStyles?: object;
}

Modal.setAppElement("#__next");

export default function ModalTemplate({
  isOpen,
  onRequestClose,
  children,
  contentStyles,
}: ModalTemplateType) {
  const [styles, setStyles] = useState({
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(22, 22, 22, 0.863)",
      backdropFilter: "blur(5px)",
    },
    content: {
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      maxWidth: "800px",
      transform: "translate(-50%, -50%)",
      background: "#ffffff",
      borderRadius: "20px",

      maxHeight: "70vh",
      padding: "0px",
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{ ...styles }}
      closeTimeoutMS={200}
    >
      <Container>{children}</Container>
    </Modal>
  );
}
