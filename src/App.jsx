import Navbar from './partial/Navbar';
import UpperNavbar from './partial/UpperNavbar';
import Footer from './partial/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './cart/Cart';
import Home from './home/Home';
import BasicTable from './components/BasicTable';
import CreateTable from './table/CreateTable'
import User from './login/User'
import { BorderBottom } from './App.style';
import Register from './login/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <UpperNavbar />
        <BorderBottom />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/table" element={<CreateTable />} />
          <Route path="/login" element={<User />} />
          <Route path='/basictable' element={<BasicTable />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
