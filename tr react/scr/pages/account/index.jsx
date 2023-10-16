const Account = () => {
    return ( 
        <div className="divUsers">
            <br />
            <br />
            <br />
            <form className="formUsers" action="">
                <h1>Bienvenido</h1>
                <br />
                <i className="fa fa-user-circle creaCuenta" />
                <input type="email" placeholder="Email:" />
                <br />
                <i className="fa fa-lock" />
                <input type="text" placeholder="Contraseña:" />
                <br />
                <button type="submit" className="buttonForm">
                Ingresar
                </button>
                <br />
                <button type="button" id="signUp" className="buttonActive">
                Registro
                </button>
                <button type="button" id="signIn" className="buttonDisactive">
                Login
                </button>
            </form>
        </div>
     );
}
 
export default Account;