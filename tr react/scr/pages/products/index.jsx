import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    const getProducts = () => {
      fetch('http://localhost:3001/api/products/listar')
          .then(res => res.json())
          .then(products => {
              setProducts(products);
          })
    }
  
    useEffect(getProducts, []);
  
    useEffect(() => {
      console.log('El componente se actualizó');
    }, [products])


    return ( 
        <>
            <div className="col-12">
                <h1 id="producTitle">Nuestros productos</h1>
            </div>
            <ProductCard 
                cart={cart} 
                setCart={setCart} 
                products={products} 
            />
        </>

     );
}
 
export default Products