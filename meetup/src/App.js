import Header from './shared/header/Header';
import Auth from './pages/auth/Auth';
import Footer from './shared/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
