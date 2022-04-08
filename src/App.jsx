import Navbar from './partial/Navbar';
import UpperNavbar from './partial/UpperNavbar';
import Footer from './partial/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './cart/Cart';
import Home from './home/Home';
// import CreateTable from './components/PaginationTable';
import CreateTable from './table/CreateTable'
import StateTutorial from './hooks/StateTutorial'
import { BorderBottom } from './App.style';

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
          <Route path="/statetutorial" element={<StateTutorial />} />
          {/* <Route path='/crud' element={} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
