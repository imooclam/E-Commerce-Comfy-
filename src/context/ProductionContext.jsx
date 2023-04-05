import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/Product_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_START,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_START,
} from '../action';
import { products_url as url } from '../utils/constant';
const GlobalContext = createContext();

//  custom Hook
export const useGlobalContext = () => useContext(GlobalContext);
//import { useGlobalContext } from './context';
// const { name } = useGlobalContext();

// UseReducer
// const reducer = (state, action) => {};

// defaultState
const initialValue = {
  isOpenSlider: false,
  product: [],
  productLoading: false,
  productError: false,
  featureProduct: [],
  singleProductLoading: false,
  singleProductError: false,
  singleFeatureProduct: {},
};
const ProductionContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const openSlider = () => {
    dispatch({
      type: SIDEBAR_OPEN,
    });
  };
  const closeSlider = () => {
    dispatch({
      type: SIDEBAR_CLOSE,
    });
  };
  const FetchProducts = async url => {
    dispatch({
      type: PRODUCT_LOADING,
    });
    try {
      const response = await axios.get(url);
      const ProductData = response.data;
      dispatch({
        type: PRODUCT_START,
        payload: ProductData,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_ERROR,
      });
    }
  };
  const fetchSingleProduct = async url => {
    dispatch({
      type: SINGLE_PRODUCT_LOADING,
    });
    try {
      const response = await axios.get(url);
      const singleProductData = response.data;
      dispatch({
        type: SINGLE_PRODUCT_START,
        payload: singleProductData,
      });
    } catch (error) {
      dispatch({
        type: SINGLE_PRODUCT_ERROR,
      });
    }
  };
  useEffect(() => {
    // TEST URL AND ERROR
    // FetchProducts(`${url}S`);
    FetchProducts(url);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ ...state, openSlider, closeSlider, fetchSingleProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default ProductionContext;
