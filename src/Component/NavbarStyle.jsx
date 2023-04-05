import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constant';
import CartButtons from './CartButtons';
import { useGlobalContext } from '../context/ProductionContext';

const NavbarStyle = () => {
  const { openSlider, closeSlider } = useGlobalContext();
  return (
    <NavContainer>
      <article className="nav-center">
        <article className="nav-header">
          {/* First one should img */}
          <Link to="/">
            <img src={logo} alt="Comfy-logo" className="img" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSlider}>
            <FaBars />
          </button>
        </article>
        <ul className="nav-links">
          {links.map(link => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                {/* <Link to={url}>{text}</Link> */}
                <NavLink
                  to={url}
                  style={({ isActive }) => {
                    return { color: isActive ? '#e67e22' : '#444' };
                  }}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSlider}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </article>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  box-shadow: 0px 0 10px 2px #33333325;

  .nav-center {
    width: 90vw;
    max-width: 120rem;
    margin: 0 auto;
    .nav-links {
      display: none;
    }
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 3rem;
    }
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 62em) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      .nav-links {
        display: flex;
        font-size: 3rem;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        font-weight: 600;
        gap: 3rem;
        li {
          margin: 0 0.5rem;
        }
        a {
          color: var(--clr-grey-3);
          font-size: 2rem;
          text-transform: capitalize;
          letter-spacing: var(--spacing);
          padding: 0.5rem;
          border: none;
          &:hover {
            border-bottom: 2px solid var(--clr-primary-7);
          }
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default NavbarStyle;

// <NavLink
//           to="/"
//           style={({ isActive }) => {
//             return { color: isActive ? 'red' : '#555' };
//           }}
//         >
//           Home
//         </NavLink>
