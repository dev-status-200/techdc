import Document, { Html, Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render() {
    return (
    <Html>
      <title>Technology Development Council</title>
      <Head>
        <meta name="description" content="Lead Management System" />
        <link rel="icon" href="/logo.png" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"></link> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"></link> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}
export default MainDocument