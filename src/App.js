import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import login_component from './login_component'
import SignUp from "./signup_component";
import Dashboardpage from "./Components/Dashboardpage";

function App() {
  return (<Router>

<Home/>
        <div className="App">




                <Switch>
                  <Route path="/sign-in" component={login_component} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/dashboardpage" component={Dashboardpage} />
                </Switch>

                </div>



        </Router>
  );
}

export default App;
