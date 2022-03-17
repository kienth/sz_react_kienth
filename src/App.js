import Navbar from './partial/Navbar';
import UpperNavbar from './partial/UpperNavbar';
import Slider from './home/Slider';
import Footer from './partial/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <UpperNavbar />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Slider />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
