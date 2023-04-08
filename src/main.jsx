import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/general.css';
import './css/style.css';
// Must be the Last One
import './css/query.css';
// Global Context
import ProductProvider from './context/ProductionContext';
// Filter Context
import FilterProvider from './context/FilterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>
);
