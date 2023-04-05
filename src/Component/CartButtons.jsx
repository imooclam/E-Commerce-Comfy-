import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/ProductionContext';
const CartButtons = () => {
  const { closeSlider } = useGlobalContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <NavLink
        to="/Cart"
        className="cart-btn"
        style={({ isActive }) => {
          return { color: isActive ? '#780e00' : '#555' };
        }}
        onClick={closeSlider}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </NavLink>
      <button type="button" className="auth-btn">
        Login
        <FaUserPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 30rem;
  a {
    font-size: 2.6rem;
  }

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 2.8rem;
    letter-spacing: var(--spacing);

    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 5rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -1px;
    right: -10px;
    background: #cf711f;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.75rem;
    color: var(--clr-white);
    padding: 12px;
    color: #fff;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
