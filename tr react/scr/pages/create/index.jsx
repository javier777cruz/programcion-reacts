import './css/create.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => 
{   
  const history = useHistory();
    const [image, setImage] = useState(null);   //Para la carga de la imagen
    const [formData, setFormData] = useState({  //Tomamos los datos del formulario
      name: '',
      price: 0,
      description: '',
      category: 'Llavero'
    });
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
      // Crear una URL para la vista previa de la imagen
      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, imageURL });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData)

      if (image && formData.name && formData.description && formData.price && formData.category) {
        // Todos los datos están listos para enviar a la API
        const data = new FormData();
        console.log(image.name)
        const fileName = image.name; //Nombre de la imagen
        data.append('image', image, fileName); // Añadir el nombre del archivo

        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('price', formData.price);
        
        try {
          const response = await fetch('http://localhost:3001/api/products/crear', {
            method: 'POST',
            body: data,
          });
  
          if (response.ok) {
            // Procesar la respuesta exitosa
            // Deberiamos ir al detalle del producto
            console.log("llegamos")
            const jsonResponse = await response.json();
            console.log('Respuesta exitosa:', jsonResponse);
            history.push(`/detail/${jsonResponse._id}`);
          } else {
            // Procesar errores
            alert('No se pudo cargar el producto, intentelo nuevamente');
          }
        } catch (error) {
          // Manejar errores
        }
      } else {
        alert('Por favor, complete todos los campos y seleccione una imagen');
      }
    };
  


  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="products-title">
            Creación de productos
          </h1>
        </div>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit} className="formCreate" encType="multipart/form-data">
          <div className="row product-detail">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre del producto:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Llavero River"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="price" className="form-label">
                Precio del producto:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Ej: 1500"
                className="form-input"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="category" className="form-label">
                Categoría:
              </label>
              <select name="category" id="category" className="form-input" value={formData.category}
                onChange={handleInputChange}>
                <option value="Llavero">Llaveros</option>
                <option value="Picadores">Picadores/Grinders</option>
                <option value="Veladores">Veladores</option>
                <option value="Mates">Mates</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="description" className="form-label">
                Descipción:
              </label>
              <textarea
                name="description"
                id="description"
                className="form-input"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <input type="file" name="image" accept="image/*" onChange={handleImageChange}/>
            </div>
            {formData.imageURL && (
              <img
                src={formData.imageURL}
                alt="Vista previa de la imagen"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            )}
            <div className="col-12">
              <button type="submit" className="buy-now-button">
                Guardar producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  };
  
  export default Create;