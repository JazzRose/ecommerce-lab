const Product = ({ product, onAddToBasketClick }) => {
  const handleAddToBasketClick = () => onAddToBasketClick(product);
  return (
    <div>
      <li>
        <h5>{product.title}</h5>
        <button onClick={handleAddToBasketClick}>Add to Basket</button>
      </li>
    </div>
  );
};

export default Product;
