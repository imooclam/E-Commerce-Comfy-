import React from 'react';
import { useFilterContext } from '../context/FilterContext';

import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';
const Sort = () => {
  const {
    filter_product: products,
    grid_view,
    ListView,
    GridView,
  } = useFilterContext();
  return (
    <Wrapper>
      <article className="btn-container">
        <button className={`${grid_view ? 'active' : null}`} onClick={GridView}>
          <BsFillGridFill className="ram" />
        </button>
        <button
          className={`${!grid_view ? 'active' : null}`}
          onClick={ListView}
        >
          <BsList className="ram" />
        </button>
      </article>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 10rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 10rem;
    }
    label {
      display: inline-block;
      margin-right: 12.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  hr {
    background-color: #333;
    width: 100%;
    height: 1px;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.8rem;
    button {
      background: transparent;
      border: none;
      /* border: 0.1px solid var(--clr-black); */
      color: var(--clr-black);
      width: 100%;
      border-radius: var(--radius);
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 2rem;
    }
    svg {
      font-size: 3rem !important;
    }
    .active {
      background: var(--black);
      color: var(--white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 2rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    margin-left: 1em;
  }
  label {
    font-size: 2rem;
    text-transform: capitalize;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
export default Sort;
