import { useRef } from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ product, cart, setCart }) => {
  const button = useRef();
  const imageUrl = `http://localhost:3001/img/${product.image}`;

  /*
  const addToCart = () => {
    console.log(button.current.id);
    console.log("estamos agregando al carrito");
    const carNew = [
      ...cart,
      button.current.id
    ];
    setCart(carNew);
  };
  // const linkTo = '/detail/' + product._id;
   */
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="productItem">
        <Link to={`/detail/${product._id}`}>
            <img
              className="productImage"
              src={imageUrl}
              alt="imagen del producto"
            />
        </Link>
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>
        <h4>{product.category}</h4>
        <button id={product._id} ref={button}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;