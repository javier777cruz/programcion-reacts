import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //Obtenemos de la ruta los params, destructuramos y tomamos id
  const [customQuantity, setCustomQuantity] = useState('');//Mostramos el valor del input de cantidad
  const [selectedOption, setSelectedOption] = useState('1');

  const getProduct = () => {
    fetch(`http://localhost:3001/api/products/detalle/${id}`)
      .then(res => res.json())
      .then(product => {
        setProduct(product);
        console.log(product);
      })
      .catch(error => console.log(error))
  }

  useEffect(getProduct, [id]);



  const handleCustomQuantityChange = (e) => {
    const inputValue = e.target.value;
    
    if (inputValue <= 100) {
      setCustomQuantity(inputValue);
    } else {
      alert('El valor debe ser igual o menor que 100');
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue !== 'custom') {
      setCustomQuantity(''); // Restablece la cantidad personalizada al seleccionar una opción predefinida
    }
  };

  return (
    <div className="container products-wrapper">

      <div className="productItemDetail">
        <div className="row">
          <div className="col-12 col-lg-8">
            <img
              src={`http://localhost:3001/img/${product.image}`}
              alt="product"
              className="productImageDetail"
            />
            <h3 className="productDescriptionDetail">{product.description}</h3>
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center customBorder">
            <article className="productInfoDetail">
              <h2>{product.name}</h2>
              <h4>{product.category}</h4> 
              <h3>
                <span>$ {product.price}</span>
              </h3>
              <h3>Cantidad: </h3>
              <select className="opcionesCantidad"  value={selectedOption} onChange={handleSelectChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="custom">Más</option>
              </select>
              {
              selectedOption === 'custom' && ( // Mostrar el input si customQuantity es 'custom'
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={customQuantity}
                  onChange={handleCustomQuantityChange}
                />
              )}
              <button>Comprar ahora</button>
              <button>Añadir al carrito</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detai