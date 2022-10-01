import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
// eslint-disable-next-line react/display-name
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line react/display-name
      ctx.renderPage = () =>
        // eslint-disable-next-line react/display-name
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <title>Tokio Engenharia</title>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="shortcut icon"
              href="/icons/tokio_ícone_vazado_fundo_cinza_escuro_com_branco.png"
            />
            <meta property="og:image" content="/images/post.png" />

            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            ></link>
            <meta
              name="description"
              content="Sua obra em boas mãos. Construção, reforma e manutenção de edifícios e obras civis."
            />
            <meta
              property="og:image"
              content="https://tokioengenharia.com.br/NossoRoleFull.jpg"
            />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="515" />
            <meta property="og:image:height" content="515" />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
