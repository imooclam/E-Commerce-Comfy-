import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/Filter_reducer';
import { useGlobalContext } from '../context/ProductionContext';

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../action';

const FilterContext = createContext();

//  custom Hook
export const useFilterContext = () => useContext(FilterContext);

const initialState = {
  filter_product: [],
  all_product: [],
  grid_view: false,
};

export const FilterProvider = ({ children }) => {
  const { product } = useGlobalContext();
  // we Should Test
  // console.log(product);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: product });
  }, [product]);

  const ListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const GridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  return (
    <FilterContext.Provider value={{ ...state, GridView, ListView }}>
      {/* // mean  any thing  */}
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;
