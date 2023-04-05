import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import NavbarStyle from '../Component/NavbarStyle';
const SharedPage = () => {
  return (
    <>
      <NavbarStyle />

      <section className="section">
        <Outlet />
      </section>
    </>
  );
};
export default SharedPage;
