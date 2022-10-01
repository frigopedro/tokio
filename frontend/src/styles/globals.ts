import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
scroll-behavior: smooth;


html{
  overflow-x: hidden;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    font-size: min(16px) !important;
  }

  ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;

  border-radius: 33333px;
  position: fixed !important;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  position: fixed !important;


}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 33333px;

  background: rgba(255, 255, 255, 0.5);
  position: fixed !important;

  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);

}
html{
  overscroll-behavior: contain !important;
}

html {

@media (max-width: 1080px) {
  font-size: 93.75%;
}

@media (max-width: 720px) {
  font-size: 100%;

}
}
 

  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea , button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }
  h1{
    font-size: 1.5rem;
  }
  h2{
    font-size: 1.25rem;
  }
  h3{
    font-size: 1.125rem;
  }


  
  p{
    color: ${(props) => props.theme.colors.lightText};
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


  @media (max-width:720px) {
    h1{
    font-size: 1.25rem;
  }
  h2{
    font-size: 1.125rem;
  }
  h3{
    font-size: 1rem;
  }
  p{
    font-size: 0.875rem;
    
  }
  }
`;
