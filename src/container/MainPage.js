import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Basket from '../components/Basket';
import ProductsList from '../components/ProductsList';

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('User');
  const [basketItems, setBasketItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>E-shop</h1>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        contentLabel='User options'
      >
        <label htmlFor='name'>Your name: </label>
        <input
          type='text'
          name='name'
          placeholder={name}
          onChange={handleNameChange}
        />
        <br></br>
        <label htmlFor='name'>Password: </label>
        <input type='password' min='1' name='password' />
        <br></br>
        <button onClick={toggleModal}>OK</button>
      </Modal>
      <p>Welcome {name}!!</p>
      <ProductsList
        products={products}
        onAddToBasketClick={onAddToBasketClick}
      />

      <Basket basketItems={basketItems} />
    </>
  );
};

export default MainPage;
