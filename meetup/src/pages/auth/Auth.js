import React from 'react';
import './Auth.scss';
import authService from '../../api/auth/auth-service';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      login: '',
      password: '',
    };
  }

  onChangeLogin(e) {
    this.setState({
      login: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    authService(this.state.login, this.state.password);

    console.log('Форма отправлена!');
  }

  render() {
    return (
      <main className="main">
        <h1 className="main__title">Страница Митапа</h1>
        <section className="main-meetups">
          <div className="main-meetups__container">
            <form className="main-meetups__authorization-form" onSubmit={this.handleSubmit}>
              <div className="main-meetups__authorization-inputs-wrapper">
                <div className="main-meetups__login-wrapper">
                  <label className="main-meetups__label" htmlFor="login">
                    Логин
                  </label>
                  <input
                    className="input main-meetups__login"
                    type="text"
                    name="login"
                    placeholder="Login"
                    id="login"
                    value={this.state.login}
                    onChange={this.onChangeLogin}
                  />
                </div>
                <div className="main-meetups__password-wrapper">
                  <label className="main-meetups__label" htmlFor="password">
                    Пароль
                  </label>
                  <input
                    className="input main-meetups__password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
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
}

export default Auth;
