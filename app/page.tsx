import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '../components/Header/Header';
import { Faq } from '../components/Faq/Faq';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <Faq />
      <Footer />
    </>
  );
}
