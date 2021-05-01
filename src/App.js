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
import Projects from './Components/Projects/Projects/Projects';

export const ChangeRouteContext = createContext();
export const RouteLocationContext = createContext();

function App() {
  const [routeLocation, setRouteLocation] = useState('');

  const [isNext, setIsNext] = useState('stable');
  function changeRoute(event) {
    let scale = 1;
    let prevScale = scale;
    scale += event.deltaY * -0.01;
    // Restrict scale
    // scale = Math.min(Math.max(.125, scale), 4);

    if (prevScale > scale) {
      setIsNext('next');

    } else {
      setIsNext('prev');
    }
  }
  return (
    <div id='App' onWheel={changeRoute} className="App">
      <ChangeRouteContext.Provider value={[isNext, setIsNext]}>
        <RouteLocationContext.Provider value={[routeLocation, setRouteLocation]}>
          <Router>
            <NavBar />
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/expertise" component={Expert} />
                    <Route exact path="/projects" component={Projects} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </Router>
        </RouteLocationContext.Provider>
      </ChangeRouteContext.Provider>
    </div>
  );
}

export default App;


