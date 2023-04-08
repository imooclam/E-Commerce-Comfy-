import { HeroBanner, Filter, Sort, ProductList } from '../Component';
import React from 'react';
import styled from 'styled-components';

const Products = () => {
  return (
    <article>
      <HeroBanner title="Product" />
      <Wrapper className=" page">
        <article className="section products">
          <Filter />
          <section>
            <Sort />
            <ProductList />
          </section>
        </article>
      </Wrapper>
    </article>
  );
};
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 20rem 1fr;
    }
  }
`;
export default Products;
