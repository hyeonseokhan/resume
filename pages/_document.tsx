import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class OnlineResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
