import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { formatPrice } from '../utils/helper';
const Product = ({ id, name, image, price }) => {
  return (
    <Wrapper>
      <article className="  product_container">
        <img src={image} alt={name} className="product-img" />
        <Link to={`products/${id}`} className="product-link">
          <FaSearch />
        </Link>
      </article>
      <article className="product_info">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </article>
    </Wrapper>
  );
};
export default Product;

// you must must revision
const Wrapper = styled.article`
  .product_container {
    position: relative;
    background: var(--clr-black);
    width: 100%;
    border-radius: 1rem;
  }
  .product-img {
    border-radius: 1rem;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;
    transition: var(--transition);
  }
  .product-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .product_container:hover img {
    opacity: 0.5;
  }
  .product_container:hover .product-link {
    opacity: 1;
  }
  .product_info {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product_info h5,
  .product_info p {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 2rem;
  }

  .product_info p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    margin-top: 0;
    font-size: 1.8rem;
    font-weight: 700;
  }
  /* .product_container {
    padding: 2rem 0;
  }
  .product-img {
    position: relative;
    width: 30rem;
    height: 30rem;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    .product-img {
      width: 100%;
    }
  } */
`;
