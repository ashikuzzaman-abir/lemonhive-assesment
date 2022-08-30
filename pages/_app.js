import '../styles/globals.css'
import PageLayout from '../components/PageLayout'
function MyApp({ Component, pageProps }) {
  return <PageLayout Component={Component} pageProps={pageProps}/>
}

export default MyApp
