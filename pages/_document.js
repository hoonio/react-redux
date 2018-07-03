import Document, { Head, Main, NextScript } from 'next/document'
import JsonLd from '../components/json-ld'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Hoonio</title>
          <meta name="description" content="Bridging the gap between ideas and technology" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta property="fb:admins" content="514174661" />
          <meta property="fb:app_id" content="174472439234583" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script async src="//www.googletagmanager.com/gtm.js?id=GTM-7NKB"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', 'GTM-7NKB');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <JsonLd />
        </body>
      </html>
    )
  }
}
