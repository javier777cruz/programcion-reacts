import ProductCard from ".productCard";

const ProductList = ({products, cart, setCart }) => {
  return (
    <div className="container" id="listaProduct">
      <div className="row">
        {/* Show the "visited" products */}
        {products.map((product) => (
          <ProductCard
            key={product._id} 
            product={product}
            setCart={setCart}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;