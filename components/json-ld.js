export default () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: `{
      "@context": "http://schema.org",
      "@type": "Organization",
      "url": "https://www.hoonio.com",
      "name": [
        {
          "@value": "Hoonio",
          "@language": "en"
        },{
          "@value": "후니오",
          "@language": "kr"
        },{
          "@value": "フニオ",
          "@language": "jp"
        }
      ],
      "logo": "https://www.hoonio.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "40 Grafton Terrace",
        "addressLocality": "London",
        "postalCode":"NW5 4HY",
        "addressCountry": "GB"
      },
      "hasMap": "https://goo.gl/maps/4uhV7zWswm82"
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.5497938",
        "longitude": "-0.1574368"
      },
      "sameAs": [
        "https://www.facebook.com/Hoonio-255313574878/",
        "https://twitter.com/hoonio",
        "https://plus.google.com/+Hoonio",
        "https://www.instagram.com/hoon.io/",
        "https://www.youtube.com/hoonio",
        "https://www.linkedin.com/company/hoonio",
        "https://github.com/hoonio",
        "http://blog.hoonio.com"
      ]
    }`
  }}></script>
)
