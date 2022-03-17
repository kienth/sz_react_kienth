import Navbar from './partial/Navbar';
import UpperNavbar from './partial/UpperNavbar';
import Slider from './home/Slider';
import Footer from './partial/Footer'

function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
