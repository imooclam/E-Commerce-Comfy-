import styled from 'styled-components';
import hero from '../assets/hero-bcg.jpeg';

const AboutBody = () => {
  return (
    <Wrapper>
      <section className="img-container">
        <img src={hero} alt="hero-img" className="hero-img" />;
      </section>
      <section className="hero-info title">
        <h2>Our Story</h2>

        <div className="title-underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel
          reiciendis placeat labore, necessitatibus nulla quia. Rerum voluptas
          sapiente eum, minima quis ducimus tempora debitis laudantium, totam
          quia consequuntur officiis.
        </p>
      </section>
    </Wrapper>
  );
};
export default AboutBody;
const Wrapper = styled.article`
  display: grid;
  padding: 2rem;
  margin: 0 auto;
  max-width: 130rem;
  place-items: center;
  grid-template-columns: 1fr;
  text-align: center;
  gap: 4rem;

  .img-container {
    width: 100%;
    padding: 6rem 0;

    .hero-img {
      margin: 0 auto;
      width: 40rem;
      display: block;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  .title {
    text-align: left;
  }
  h2 {
    font-size: 5rem;
    font-weight: 700;
  }
  .title .title-underline {
    text-align: left;
    margin-left: 1rem;
    width: 13rem;
    background-color: hsl(22, 31%, 52%);
  }
  p {
    font-size: 1.8rem;
    line-height: 1.7;
  }
  @media (min-width: 62em) {
    grid-template-columns: 1fr 1fr;
  }
`;
