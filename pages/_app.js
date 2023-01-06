import '../styles/globals.css';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Shared/Header';
import 'aos/dist/aos.css';
import Footer from '../components/Shared/Footer';

function MyApp({ Component, pageProps }) {

  return(
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}

export default MyApp
