import logo from './assets/img/Logo.jpeg'
import './assets/css/header.css'
import {Link} from 'react-router-dom'
import SearchButton from '../SearchButton'



const Header = () => {

    return (
        <header className ="container-fluid header">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-2">
                    <img className="header1" src={logo} alt="Logo Tienda" />
                </div>
                <div className="col-lg-6 col-md-7 col-sm-8 header2">
                    <nav>
                        <Link className="hnav" to="/">Empresa</Link>
                        <Link className="hnav" to="/productos">Productos</Link>
                        <Link className="hnav" to="/registro">Registro</Link>
                        <Link className="hnav" to="/account">Mi Cuenta</Link>
                        <Link className="hnav" to="/create">Crear</Link>
                        <Link className="hnav" to="/update">Update</Link>
                    </nav>
                </div>
                <SearchButton/>
            </div>      
        </header >
    );
}

export default Header;