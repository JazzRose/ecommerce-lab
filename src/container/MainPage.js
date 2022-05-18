import React, { useState, useEffect } from 'react';
import Basket from '../components/Basket';
import ProductsList from '../components/ProductsList';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  const onAddToBasketClick = (selectedProduct) => {
    const copyArray = [...basketItems];
    const isOnArray = copyArray.some((product) => {
      return product.id === selectedProduct.id;
    });
    if (!isOnArray) {
      copyArray.push(selectedProduct);
    }

    setBasketItems(copyArray);
  };

  return (
    <>
      <h1>E-shop</h1>
      <ProductsList
        products={products}
        onAddToBasketClick={onAddToBasketClick}
      />
      <Basket basketItems={basketItems} />
    </>
  );
};

export default MainPage;
