const Register = () => {
    return (
        <div className="divUsers">
            <br />
            <br />
            <br />
            <form className="formUsers" action> 
                <h1>Registrate</h1><br />
                <i className="fa fa-user-circle creaCuenta" />
                <input type="text" placeholder="Nombre:" /><br />
                <i className="fa fa-user-circle creaCuenta" />
                <input type="text" placeholder="Apellido:" /><br />
                <i className="fa fa-envelope" />
                <input type="email" placeholder="Email:" /><br />
                <i className="fa fa-lock" />
                <input type="text" placeholder="Contraseña:" /><br />
                <i className="fa fa-lock" />
                <input type="text" placeholder="Confirmar contraseña:" /><br />
                <i className="fa fa-mobile" />
                <input type="tel" placeholder="Telefono" /><br />
                <button type="submit" className="buttonForm">Crear cuenta</button><br />
                <button type="button" id="signUp" className="buttonActive">Registro</button>
                <button type="button" id="signIn" className="buttonDisactive">Login</button>
            </form>
        </div>
    );
  };
  
  export default Register;