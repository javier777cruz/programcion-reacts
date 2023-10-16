import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Category = () => {

    const [products, setProducts] = useState([]);
    //const [cart, setCart] = useState([]);
    const { id } = useParams(); //Obtenemos de la ruta los params, destructuramos y tomamos id
    console.log(useParams());
    const getProducts = () => {
      fetch(`http://localhost:3001/api/products/listar/category/${id}`)
          .then(res => res.json())
          .then(products => {
              setProducts(products);
          })
    }
  
    useEffect(getProducts, [id]);
  
    useEffect(() => {
      console.log('El componente se actualizó');
    }, [products])


    return ( 
        <>
            <div className="col-12">
                <h1 id="producTitle">{id}</h1>
            </div>
            <ProductCard 
                //cart={cart} 
                //setCart={setCart} 
                products={products} 
            />
    </>
     );
}
 
export default Category;