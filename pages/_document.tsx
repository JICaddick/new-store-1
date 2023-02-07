import Document, { Html, Head, Main, NextScript } from 'next/document'
// _document is only rendered on the server side and not on the client side.
// Event handlers like onClick can't be added to this file.
// It is used to change the initial server rendered document markup.Meaning we can change the initial HTML document markup that is rendered on the server.We're using this to import our fonts because we can't import them in our _app.tsx file.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
// Below I replaced the original <Head> with my own custom <Head> that imports my fonts, leaving the rest of the code, namely the <body> and <Html> tags, untouched.

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument