import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AddAmountButton from './AddAmountButton';
const AddToCart = ({ product }) => {
  // console.log(product);
  const { stock, colors, name, id } = product;
  console.log(colors);
  const [main, setMain] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(oldAmount => {
      let temp = oldAmount + 1;
      if (temp > stock) {
        temp = stock;
      }
      return temp;
    });
  };
  const decrease = () => {
    setAmount(oldAmount => {
      let temp = oldAmount - 1;
      if (temp < 1) {
        temp = 1;
      }
      return temp;
    });
  };
  return (
    <Wrapper>
      <article className="colors">
        <span>Colors : </span>
        <section className="flex">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  main === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMain(color)}
              >
                {main === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </section>
        <article className="btn-container">
          <AddAmountButton
            increase={increase}
            decrease={decrease}
            amount={amount}
          />
          <Link to="/Cart" className="btn">
            {' '}
            add to cart
          </Link>
        </article>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 2rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 1rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
    .btn {
      margin: 2rem auto;
      w
    }
  }

  .btn {
    margin-top: 2rem;
    width: 16rem;
    font-size: 1.8rem;
    text-align:center
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
export default AddToCart;
