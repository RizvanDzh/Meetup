import logoLiga from '../../assets/logo-liga.svg';
import logoFilit from '../../assets/logo-filit.svg';
import logoAuthorization from '../../assets/logo-autorization.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header-meetups">
      <div className="header-meetups__container">
        <div className="header-meetups__logos">
          <a href="#" className="header-meetups__logo-main">
            MeetUps
          </a>
          <div className="header-meetups__logos-additional">
            <img src={logoFilit} alt="ИТ Философия" className="header-meetups__logo-philosophy" />
            <img src={logoLiga} alt="Лига Цифровой Экономики" className="header-meetups__logo-liga" />
          </div>
        </div>
        <div className="header-meetups__logo-authorization-wrapper">
          <img src={logoAuthorization} alt="Иконка авторизации" className="header-meetups__logo-autorization" />
        </div>
      </div>
    </header>
  );
}

export default Header;
