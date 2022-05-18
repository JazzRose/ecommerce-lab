const Product = ({ product, onAddToBasketClick }) => {
  const handleAddToBasketClick = () => onAddToBasketClick(product);
  return (
    <div className='product-card'>
      <li className='card-content'>
        <h5>{product.title}</h5>
        <img width='100px' src={product.image} alt='product detailed' />
        <p>£{product.price.toFixed(2)}</p>
        <p>User rating: {product.rating.rate}</p>

        <button onClick={handleAddToBasketClick}>Add to Basket</button>
      </li>
    </div>
  );
};

export default Product;
