import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
const ProductList = () => {
  const { filter_product: products, grid_view } = useFilterContext();
  //  test filter
  // console.log(products);//work 21 item
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'lowercase' }}>
        {' '}
        sorry you page is empty please search product ....
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>ProductList</GridView>;
};
export default ProductList;
