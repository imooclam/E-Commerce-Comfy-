import styled from 'styled-components';
import { useGlobalContext } from '../context/ProductionContext';
import { Product, Error, Loading } from './index';
const FeaturedProducts = () => {
  const {
    product,
    productLoading: loading,
    productError: error,
    featureProduct: features,
  } = useGlobalContext();
  // just Test
  // console.log(product);
  // console.log(error);
  // console.log(loading);
  // console.log(features);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className=" section container">
      <article className="title">
        <h2 className="title">feature products</h2>
        <section className="title-underline"></section>
      </article>
      {/* <article className=" section container"> */}
      <article className="  featured">
        {features.slice(0, 3).map(feature => {
          return <Product key={feature.id} {...feature} />;
        })}
      </article>
      {/* </article> */}
    </Wrapper>
  );
};

export default FeaturedProducts;

const Wrapper = styled.article`
  /* width: 90vw;
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 15rem; */
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  /* margin: 0 auto;
  padding-inline: 2rem;
  max-width: 120rem;
  .featured {
    display: grid;
    place-items: center;
    gap: 3rem;
  }
  @media (min-width: 38em) {
    .featured {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      gap: 3rem;
    }
  } */
`;
