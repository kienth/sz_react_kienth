import Navbar from './Navbar';
import Home from './Home';
import Demo from './Demo';


function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
