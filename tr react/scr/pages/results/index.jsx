import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Results = () => {

    const location = useLocation();
    console.log(location.search);
    const query = new URLSearchParams(location.search);//Tomamos la url completa donde estamos parados
    const word = query.get('word'); //Tomamos el valor que colocamos en el input, ya que sabiamos la palabra clave que en este caso es word

    const [products, setProducts] = useState([]);
    //const [cart, setCart] = useState([]);

    const getProducts = () => {
      fetch(`http://localhost:3001/api/products/search?name=${word}`)
          .then(res => res.json())
            /*
            {
            if (!res.ok) {
              // Si la respuesta no es exitosa (código 404 u otro error)
              throw new Error('No se encontraron productos'); // Puedes personalizar el mensaje de error
            }
            return res.json(); // Si la respuesta es exitosa, convierte los datos JSON
          })*/
          .then(product => setProducts(product))
          .catch(error => console.log(error))
    }
  
    useEffect(getProducts, [word]);
  
    useEffect(() => {
      console.log('El componente se actualizó');
    }, [products])


    //Obtener la información de la query
    //Crear metodo para llamar a la API
    //useEffect y use State para cargar el state de productos con la info de la API

    return ( 
        <>
            <div className="col-12">
                <h1 id="producTitle">Resultado de la búsqueda</h1>
            </div>
            {
                products.length > 0 ?
                <ProductCard 
                //cart={cart} 
                //setCart={setCart} 
                products={products} 
                />
                :
                <div className="col-12 ">
                    <h2 className="products-title" style={{ color: "blue", textAlign: "center",fontSize: "3em", fontFamily:"cursive"}}>
                        No hay productos que coincidan con esa búsqueda
                    </h2>
                </div>
            }
            
            
        </>

     );
}
 
export default Results;