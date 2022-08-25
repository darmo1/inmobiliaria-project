import Script from 'next/script'
import '../styles/globals.css'
import Layout from '../Layout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ID_GOOGLE_ANALYTICS = process.env.ID_GOOGLE_ANALYTICS

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
       async
       src={`https://www.googletagmanager.com/gtag/js?id=${'G-1V2VBQ13Q5'}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1V2VBQ13Q5' );
          `}    
      </Script>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
