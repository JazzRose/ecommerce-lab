import BasketItem from './BasketItem';
const Basket = ({ basketItems }) => {
  const basketNodes = basketItems.map((product, index) => {
    return <BasketItem product={product} key={index} />;
  });
  return (
    <div>
      <h2>Basket</h2> <ul>{basketNodes}</ul>
    </div>
  );
};

export default Basket;
