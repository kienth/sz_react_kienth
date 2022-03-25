import Navbar from './partial/Navbar';
import UpperNavbar from './partial/UpperNavbar';
import Footer from './partial/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './cart/Cart';
import Home from './home/Home';
import { BorderBottom } from './App.style';

function App() {
  return (
    <Router>
      <div className="App">
        <UpperNavbar />
        <BorderBottom />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
