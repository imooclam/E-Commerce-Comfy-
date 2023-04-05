import styled from 'styled-components';
import hero from '../assets/hero-bcg.jpeg';
import { Link } from 'react-router-dom';

const HeroBanner = ({ title, product }) => {
  return (
    <article>
      <article className="hero-header">
        <h2>
          {' '}
          <Link to="/">Home</Link>{' '}
          {product && <Link to="/products">/ Products</Link>} / {title}
        </h2>
      </article>
    </article>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default HeroBanner;
