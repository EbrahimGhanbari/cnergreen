import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
// import App from './App';
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact';
// import Blog from './components/Blog/Blog';
import Team from './components/Team/Team';
import RequestInfo from './components/Contact/RequestInfo';
import Questionnaire from './components/Contact/Questionnaire';
import EnhanceOilRecovery from './components/Solution/EnhanceOilRecovery/EnhanceOilRecovery';
import FractureDrivenInteraction from './components/Solution/FractureDrivenInteraction/FractureDrivenInteraction';
import CnerFoam from './components/CnerFoam/CnerFoam';
import WhyCnergreen from './components/WhyCnergreen/WhyCnergreen';

const routing = (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                {/* <Route exact path="/blog" component={Blog} /> */}
                <Route exact path="/team" component={Team} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/requestInfo" component={RequestInfo} />
                <Route exact path="/questionnaire" component={Questionnaire} />
                <Route exact path="/enhance_oil_recovery" component={EnhanceOilRecovery} />
                <Route exact path="/fracture_driven_interaction" component={FractureDrivenInteraction} />
                <Route exact path="/cnerfoam" component={CnerFoam} />
                <Route exact path="/why_cnergreen" component={WhyCnergreen} />
            </Switch>
        </Router>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
