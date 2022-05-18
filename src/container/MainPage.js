import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Basket from '../components/Basket';
import ProductsList from '../components/ProductsList';
import Title from '../components/Title';

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

  const clearbasket = () => setBasketItems([]);

  return (
    <>
      <Title>E-shop</Title>
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
      <div className='main-container'>
        <div className='product-grid'>
          <ProductsList
            products={products}
            onAddToBasketClick={onAddToBasketClick}
          />
        </div>
        <div className='basket'>
          <Basket basketItems={basketItems} clearbasket={clearbasket} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
