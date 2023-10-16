import logo from './assets/img/Logo.jpeg'
import faceIcon from './assets/img/icono fb.jpg'
import instIcon from './assets/img/icono insta.jpg'
import linkIcon from './assets/img/icono linkedin.png'
import './assets/css/footer.css'

function Footer() {
    return(
        <footer className="container-fluid footer">
            <div className="row">
                <img className="col-lg-4 col-md-3 col-md-2 footer1" src={logo} alt="Logo Tienda" />
                <div className="col-lg-4 col-md-6 col-md-8 footer2">
                    <div className="footer4" id="iconofb">
                        <a title="Logo facebook" href="https://facebook.com"><img className="iconos" src={faceIcon} alt="Logo facebook" /></a>
                    </div>
                    <div className="footer4" id="iconoinst">
                        <a title="Logo instagram" href="https://intagram.com/tarde del te/"><img className="iconos" src={instIcon} alt="Logo instagram" /></a>
                    </div>
                    <div className="footer4" id="iconolink">
                        <a href="linkedin.com"><img className="iconos" src={linkIcon} alt="Logo linkedin" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-md-2 footer3">
                    <span>tarde del te</span><br /><span>by</span><br /><span> &amp; </span>
                </div>
            </div>
            
        </footer>
    );   
}

export default Footer;