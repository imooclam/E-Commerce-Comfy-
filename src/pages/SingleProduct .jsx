import { useParams, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/helper';
import { useEffect } from 'react';
import styled from 'styled-components';
import { single_product_url as url } from '../utils/constant';
import {
  Loading,
  Error,
  Stars,
  StarsAlternative,
  ProductImages,
  HeroBanner,
  AddToCart,
} from '../Component';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/ProductionContext';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(useParams());
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleFeatureProduct: product,
    fetchSingleProduct,
  } = useGlobalContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`); //url fetch data with id of use prams
    // thats mean every time i change id the data will fetch again
  }, [id]);
  //console.log(product); // test  the product after i fetch

  useEffect(() => {
    // Error by default is false
    //     That's why I said that we would need to add that error in dependency array because remember when we

    // start fetching error is false, but then once we're done loading and then once we can see that there's

    // an error, then of course we set up an error to be true.

    // So once I added here notice the initial value will be of course false, but then eventually it's going

    // to be true.
    // console.log('this is error mes', error);
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  /// any change in error   will navigate to Home
  if (error) {
    return <Error />;
  }
  // console.log(product);
  const {
    id: sku,
    category,
    colors,
    company,
    featured,
    reviews,
    price,
    stock,
    stars,

    name,
    images,
    description,
  } = product;

  return (
    <Wrapper>
      <HeroBanner title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn ">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            {/* <Stars stars={stars} reviews={reviews} /> */}
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <StarsAlternative stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;

const Wrapper = styled.main`
  .product-center {
    font-size: 1.8rem;
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .content .price {
    color: var(--clr-primary-5);
    font-size: 1.8rem;
    font-weight: 600;
  }
  .desc {
    line-height: 1.7;
    font-size: 1.8rem;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 30rem;
    font-size: 2rem;
    display: inline-block;
    grid-template-columns: 12.5rem, 1fr;
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
