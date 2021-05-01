import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home/Home';
import NavBar from './Components/Shared/NavBar/NavBar';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
