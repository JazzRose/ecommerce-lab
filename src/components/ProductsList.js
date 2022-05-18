import Product from './Product';

const ProductsList = ({ products }) => {
  const productNodes = products.map((product, index) => {
    return <Product product={product} key={index} />;
  });
  return <ul>{productNodes}</ul>;
};

export default ProductsList;
