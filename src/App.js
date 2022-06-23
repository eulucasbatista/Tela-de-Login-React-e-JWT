import logoIMG from'./assets/logo.svg'


function App() {
  return (
<div className="container">
  <div className="container-login">
    <div className="wrap-login">
      <form className="login-form">
        <span className="login-form-title">Bem Vindo!</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="" />
        </span>
    <div className="wrap-input">
      <input type="email"></input>
      <span className="focus-input" data-placeholder="Email"></span>
    </div>

    <div className="wrap-input">
      <input type="password"></input>
      <span className="focus-input" data-placeholder="Password"></span>
    </div>

   <div className="container-login-form-">
    
    </div>

      </form>
    </div>
  </div>
</div>
  );
}

export default App;
