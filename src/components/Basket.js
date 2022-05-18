import BasketItem from './BasketItem';
const Basket = ({ basketItems }) => {
  const basketNodes = basketItems.map((product, index) => {
    return <BasketItem product={product} key={index} />;
  });
  return <ul>{basketNodes}</ul>;
};

export default Basket;
