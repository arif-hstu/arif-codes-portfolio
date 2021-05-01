import { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

// framer motion configuration
import { AnimatePresence } from 'framer-motion';


import NavBar from './Components/Shared/NavBar/NavBar';
import Home from './Components/Home/Home/Home';
import Expert from './Components/Expert/Expert/Expert';

export const ChangeRouteContext = createContext();

function App() {
  const [isNext, setIsNext] = useState(false);
  function changeRoute(event) {
    let scale = 1;
    let prevScale = scale;
    scale += event.deltaY * -0.01;
    // Restrict scale
    // scale = Math.min(Math.max(.125, scale), 4);

    if (prevScale > scale) {
      setIsNext(true);

    } else {
      setIsNext(false);
    }
  }
  return (
    <div id='App' onWheel={changeRoute} className="App">
      <ChangeRouteContext.Provider value={[isNext, setIsNext]}>
        <Router>
          <NavBar />
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/expertise" component={Expert} />
                </Switch>
              </AnimatePresence>
            )}
            />
        </Router>
      </ChangeRouteContext.Provider>
    </div>
  );
}

export default App;

/*<Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/expertise'>
          <Expert />
        </Route>
       </Switch>*/


