import {
  PageHero,
  FeaturedProducts,
  ContactSection,
  Services,
} from '../Component';
import styled from 'styled-components';

const Home = () => {
  return (
    <main>
      <PageHero />
      <FeaturedProducts />
      <Services />
      <ContactSection />
    </main>
  );
};
export default Home;

const Wrapper = styled.article``;
