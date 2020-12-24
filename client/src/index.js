import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// styles
import './index.css';

// components
// import App from './App';
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
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
                <Route path="/blog" component={Blog} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                <Route path="/requestInfo" component={RequestInfo} />
                <Route path="/questionnaire" component={Questionnaire} />
                <Route path="/enhance_oil_recovery" component={EnhanceOilRecovery} />
                <Route path="/fracture_driven_interaction" component={FractureDrivenInteraction} />
                <Route path="/cnerfoam" component={CnerFoam} />
                <Route path="/why_cnergreen" component={WhyCnergreen} />
            </Switch>
        </Router>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
