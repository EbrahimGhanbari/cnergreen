import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";

// styles
import "./index.scss";


// components

import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import CnerFoam from "./components/CnerFoam/CnerFoam";
import WhyCnergreen from "./components/WhyCnergreen/WhyCnergreen";
import Temporary from "./components/Temporary/Temporary";
// import EnhanceOilRecovery from "./components/Solution/EnhanceOilRecovery/EnhanceOilRecovery";
// import FractureDrivenInteraction from "./components/Solution/FractureDrivenInteraction/FractureDrivenInteraction";

const routing = (

    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/cnerfoam" component={CnerFoam} />
            <Route exact path="/why_cnergreen" component={WhyCnergreen} />
            <Route exact path="/underconstruction" component={Temporary} />

            {/*    <Route exact path="/enhance_oil_recovery" component={EnhanceOilRecovery} />
                <Route exact path="/fracture_driven_interaction" component={FractureDrivenInteraction} />*/}

        </div>
    </Router>

);

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
