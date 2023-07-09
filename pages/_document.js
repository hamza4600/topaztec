import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    // console.log(ctx.renderPage)
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                {/* <Head /> */}
                <App {...props} />
              </>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      // console.log(initialProps)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
      // return initialProps
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" type="image/svg" href="/icon/topz.jpg"/>
          <link rel="apple-touch-icon" href="/icons/Lf-icon.svg"/>

          {/* google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3Q2KKJG40"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-C3Q2KKJG40');
              `,
            }}
          />

        </Head>
        <body>
          {/* <Main /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  
}
