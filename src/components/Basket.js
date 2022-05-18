import React, { useState } from 'react';
import Modal from 'react-modal';
import BasketItem from './BasketItem';

const Basket = ({ basketItems, clearbasket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPurchased, setTotalPurchased] = useState(0);
  const [discount, setDiscount] = useState('');

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
    setTotalPurchased(0);
    clearbasket();
  };

  const priceArray = basketItems.map((item) => item.price);
  const sumTotal = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totalPurchased
  );

  const handleInput = (e) => {
    setDiscount(e.target.value);
  };

  const applyDiscount = () => {
    let newTotal = 0;
    if (discount === 'SAN20') {
      newTotal = totalPurchased * 0.8;
      const toHide = document.getElementById('discount-btn');
      toHide.classList.add('hidden');
    } else if (discount === 'JAZZ30') {
      newTotal = totalPurchased * 0.7;
      const toHide = document.getElementById('discount-btn');
      toHide.classList.add('hidden');
    } else {
      newTotal = totalPurchased;
    }
    setTotalPurchased(newTotal);

    setDiscount('');
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        contentLabel='User options'
      >
        <h2>Checkout</h2>
        <ul>{basketNodes}</ul>
        <p>Total Purchase: £{totalPurchased.toFixed(2)}</p>
        <button onClick={backToShop}>Back to Shop</button>
        <button onClick={handlePay}>Pay</button>
        <br></br>
        <label>Discount:</label>
        <input
          type='text'
          placeholder='Discount Code'
          onChange={handleInput}
          value={discount}
        ></input>
        <button onClick={applyDiscount} id='discount-btn'>
          Apply Discount
        </button>
      </Modal>
      <h2>Basket</h2>
      <ul>{basketNodes}</ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Basket;
