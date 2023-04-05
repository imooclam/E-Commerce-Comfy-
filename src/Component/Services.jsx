import styled from 'styled-components';
import { services } from '../utils/constant';
const Services = () => {
  return (
    <Wrapper>
      <article className="container">
        <article className="service-header">
          <h2>
            Custom Furniture
            <br /> Built Only For You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam
          </p>
        </article>
        <article className="Service-card">
          {services.map(service => {
            // console.log(service);
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service-header">
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </article>
      </article>
    </Wrapper>
  );
};
export default Services;
const Wrapper = styled.article`
  background-color: #eaded7;
  width: 100%;
  min-height: 30vh;
  padding: 4rem 0;
  .service-header {
    display: grid;
    h2 {
      font-size: 3.2rem;
      font-weight: 700;
    }
    p {
      font-size: 1.8rem;
      font-weight: 400;
      color: hsl(22, 28%, 37%);
    }
  }
  .Service-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
    .service-header {
      box-shadow: 0 0 3px #665502;
      background-color: #c5a491;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      margin: 2rem auto;
      text-align: center;
      gap: 2rem;
      span {
        background-color: #eaded7;

        border-radius: 50%;
        display: grid;
        place-items: center;
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        color: #453227;
        font-size: 3rem;
      }
      h3 {
        color: #453227;
        font-size: 3rem;
        font-weight: 700;
      }
      p {
        /* width: 60%; */
        font-size: 1.8rem;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 75em) {
    .Service-card {
      transform: translateY(0rem);
    }
    height: 60vh;
  }
`;
