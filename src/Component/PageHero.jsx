import styled from 'styled-components';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';
const PageHero = () => {
  return (
    <Wrapper>
      <article className="container">
        <article className="wrap ">
          <article className="header">
            <h1>Design Your Comfort Zone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              ducimus, saepe eos quis atque suscipit id ex, deleniti omnis iure
              culpa? Ipsa ullam nihil recusandae tempora quaerat veritatis cum
              provident!
            </p>
            <button className="btn btn-header">shop now</button>
          </article>
          <article className="img-container">
            <img src={heroBcg} alt="nice table" className="main-img" />
            <img src={heroBcg2} alt="person working" className="accent-img" />
          </article>
        </article>
      </article>
    </Wrapper>
  );
};

export default PageHero;
const Wrapper = styled.article`
  max-width: 100%;

  background-color: #f1f5f9;
  .wrap {
    width: 100%;
    margin: 0 auto;

    padding-inline: 2rem;
    max-width: 130rem;
    display: grid;
    grid-template-columns: 55fr 40fr;
    min-height: calc(100vh - 16rem);
    padding-top: 10rem;
    padding-bottom: 10rem;
    gap: 2rem;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 3rem;
    h1,
    p {
      margin: 0;
      width: 80%;
      align-self: flex-start;
    }
    h1 {
      font-size: 5rem;
      color: #555;
      font-weight: 700;
    }
    p {
      font-size: 1.8rem;
      color: #888;
    }
    .btn-header {
      padding: 1rem 2rem;
      font-size: 1.6rem;
      background-color: hsl(22, 31%, 52%);
      align-self: flex-start;
    }
  }
  .img-container {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
  .main-img {
    width: 100%;
    height: 550px;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }
  .accent-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 250px;
    transform: translateX(-50%);
    border-radius: var(--radius);
  }
  .img-container::before {
    content: '';
    position: absolute;
    width: 10%;
    height: 80%;
    background: var(--clr-primary-9);
    bottom: 0%;
    left: -8%;
    border-radius: var(--radius);
  }
  @media (max-width: 62em) {
    .wrap {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
    }

    .header {
      width: 80%;
      gap: 4rem;
      margin: 0 auto;
      .btn-header {
        margin: 0 auto;
        justify-self: center;
        font-size: 3rem;
      }
      h1,
      p {
        margin: 0;
        width: 100%;
      }
    }
    .img-container {
      display: none;
    }
  }
`;
