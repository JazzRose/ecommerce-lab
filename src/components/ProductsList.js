import Product from './Product';

const ProductsList = ({ products, onAddToBasketClick }) => {
  const productNodes = products.map((product, index) => {
    return (
      <Product
        product={product}
        key={index}
        onAddToBasketClick={onAddToBasketClick}
      />
    );
  });
  return (
    <ul>
      <div className='products-container'>{productNodes} </div>
    </ul>
  );
};

export default ProductsList;
