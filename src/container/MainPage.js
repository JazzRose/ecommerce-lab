import React, { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  return (
    <>
      <h1>E-shop</h1>
      <ProductsList products={products} />
    </>
  );
};

export default MainPage;
