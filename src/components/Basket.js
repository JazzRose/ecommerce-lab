import React, { useState } from 'react';
import Modal from 'react-modal';
import BasketItem from './BasketItem';

const Basket = ({ basketItems, clearbasket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPurchased, setTotalPurchased] = useState(0);

  const basketNodes = basketItems.map((product, index) => {
    return <BasketItem product={product} key={index} />;
  });

  const checkout = () => {
    setIsModalOpen(!isModalOpen);
    setTotalPurchased(sumTotal);
  };

  const backToShop = () => {
    setIsModalOpen(!isModalOpen);
    setTotalPurchased(0);
  };

  const handlePay = () => {
    setIsModalOpen(!isModalOpen);
    clearbasket();
  };

  const priceArray = basketItems.map((item) => item.price);
  const sumTotal = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalPurchased
  );

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        contentLabel='User options'
      >
        <h2>Checkout</h2>
        <ul>{basketNodes}</ul>
        <p>Total Purchase: {totalPurchased}</p>
        <button onClick={backToShop}>Back to Shop</button>
        <button onClick={handlePay}>Pay</button>
      </Modal>
      <h2>Basket</h2>
      <ul>{basketNodes}</ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Basket;
