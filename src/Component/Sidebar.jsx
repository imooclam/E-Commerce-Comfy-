import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constant';
import CartButtons from './CartButtons';
import styled from 'styled-components';
import { useGlobalContext } from '../context/ProductionContext';
const Sidebar = () => {
  //check global context
  // const data = useGlobalContext();
  // console.log(data);
  const { isOpenSlider, closeSlider } = useGlobalContext();
  // console.log(isOpenSlider);

  let Open = 1;
  return (
    <SidebarContainer>
      {/* <aside className={Open ? 'Sidebar Show-sidebar' : 'Sidebar'}> */}
      {/* //should start With False */}
      <aside
        className={`${
          isOpenSlider ? `Sidebar ${'Show-sidebar'}` : ' Sidebar close-sidebar'
        }`}
      >
        <article className="nav-header">
          {/* First one should img */}
          <Link to="/">
            <img src={logo} alt="Comfy-logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={closeSlider}>
            <FaTimes />
          </button>
        </article>
        <ul className="nav-links">
          {links.map(link => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                {/* <Link to={url}>{text}</Link> */}
                {/* <NavLink
                  to={url}
                  style={({ isActive }) => {
                    return { color: isActive ? '#e67e22' : '#444' };
                  }}
                >
                  {text}
                </NavLink> */}
                <Link className="active" to={url} onClick={closeSlider}>
                  {text}
                </Link>
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.article`
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    img {
      width: 20rem;
      object-fit: cover;
    }
    .nav-toggle {
      background: transparent;
      border: transparent;
      cursor: pointer;
      transition: var(--transition);
      cursor: pointer;
      color: var(--clr-red-dark);
      margin-top: 0.2rem;
      svg {
        font-size: 3rem;
      }
    }
  }
  .Sidebar {
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: var(--transition);
    background-color: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(10px);
    transform: translate(-100%);
  }
  .Show-sidebar {
    z-index: 999;
    transform: translate(0);
  }
  .nav-links {
    font-size: 3rem;
    text-transform: capitalize;
    padding: 1rem 3rem;
    li a {
      transition: all 0.3s ease-in-out;
      font-weight: 700;
      color: #555;
    }
    li a:hover,
    li a:active {
      color: #e67e22;
    }
  }
  /* min=> starter */
  @media (min-width: 30em) {
    .nav-links {
      font-size: 3rem;
      text-transform: capitalize;
      padding: 3rem 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5rem;
    }
  }
  @media (min-width: 62em) {
    .Show-sidebar {
      transform: translate(-100%);
    }
  }
`;
export default Sidebar;
