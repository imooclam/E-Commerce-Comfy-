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
const product_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isOpenSlider: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isOpenSlider: false };
  }
  if (action.type === PRODUCT_LOADING) {
    return { ...state, productLoading: true };
  }
  if (action.type === PRODUCT_ERROR) {
    return { ...state, productLoading: false, productError: true };
  }
  if (action.type === PRODUCT_START) {
    const newFeature = action.payload.filter(
      product => product.featured === true
    );
    // console.log(newFeature);
    return {
      ...state,
      productLoading: false,
      product: action.payload,
      featureProduct: newFeature,
    };
  }
  if (action.type === SINGLE_PRODUCT_LOADING) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }
  if (action.type === SINGLE_PRODUCT_START) {
    return {
      ...state,
      singleProductLoading: false,
      singleFeatureProduct: action.payload,
    };
  }
  if (action.type === SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductLoading: false, singleProductError: true };
  }

  // return state;
  throw new Error(` we have problem ${action.type} -action -type`);
};
export default product_reducer;
