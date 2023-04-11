import './Auth.scss';

function Auth() {
  return (
    <main className="main">
      <h1 className="main__title">Страница Митапа</h1>
      <section className="main-meetups">
        <div className="main-meetups__container">
          <form className="main-meetups__authorization-form">
            <div className="main-meetups__authorization-inputs-wrapper">
              <div className="main-meetups__login-wrapper">
                <label className="main-meetups__label" htmlFor="login">
                  Логин
                </label>
                <input className="input main-meetups__login" type="text" placeholder="Login" id="login" />
              </div>
              <div className="main-meetups__password-wrapper">
                <label className="main-meetups__label" htmlFor="password">
                  Пароль
                </label>
                <input className="input main-meetups__password" type="text" placeholder="Password" id="password" />
              </div>
            </div>

            <div className="main-meetups__authorization-links-wrapper">
              <a href="#" className="main-meetups__authorization-link">
                How to create
                <br /> account?
              </a>
              <button className="button main-meetups__button">Log in</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Auth;
