import Auth from './pages/auth/Auth';
import Meetup from './pages/meetup/Meetup';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

const token = JSON.parse(localStorage.getItem('user'));

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>{token ? <Route path="/meetup" element={<Meetup />} /> : <Route path="/" element={<Auth />} />}</Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
