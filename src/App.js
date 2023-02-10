import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, Category, Cart} from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import store from "./store/store";
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import About from './components/Footer/About/About';
import Terms from './components/Footer/Terms';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/registration" element = {<Registration/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path = "/terms" element = {<Terms/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
