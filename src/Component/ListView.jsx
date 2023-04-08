import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helper';
import { Link } from 'react-router-dom';
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 4rem;

  img {
    width: 100%;
    display: block;
    width: 40rem;
    height: 30rem;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .price {
    font-size: 1.8rem;
    color: var(--clr-primary-6);
    margin-bottom: 1.75rem;
  }
  p {
    max-width: 45em;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  .btn {
    font-size: 1.5rem;
    padding: 0.5rem 1.2rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
