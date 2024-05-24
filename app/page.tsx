import { Welcome } from '../components/Welcome/Welcome';
import { Faq } from '../components/Faq/Faq';
import { CarouselParent } from '../components/Carousel/Carousel';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <CarouselParent title="Best for School" />
      <Faq />
    </>
  );
}
