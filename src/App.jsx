import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Products,
  About,
  Checkout,
  SingleProduct,
  SharedPage,
  PrivateRoute,
  Error,
  Cart,
} from './pages';

import { Footer, Sidebar, Navbar, NavbarStyle } from './Component';
import { useGlobalContext } from './context/ProductionContext';

function App() {
  const data = useGlobalContext();
  // console.log(data);
  // console.log(log?.name, openSlider);
  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarStyle />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />

        {/* This one is the protection one */}
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// <BrowserRouter>
// {/* share Element To all pages */}
// {/* <nav> hi </nav> */}
// {/* singlePAge */}
// <Routes>
//   {/*Route=> show this singlePAge */}
//   <Route path="/" element={<SharedPage />}>
//     <Route index element={<Home />} />
//     {/* so we go here to page of about */}
//     <Route path="about" element={<About />} />
//     <Route path="product" element={<Product />} />
//     <Route path="product/:productId" element={<SingleProduct />} />
//     <Route path="*" element={<Error />} />
//   </Route>
// </Routes>
// {/* share Element To all pages */}
// {/* <footer>Our footer</footer> */}
// </BrowserRouter>
