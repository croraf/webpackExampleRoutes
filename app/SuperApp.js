import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import {AppContainer} from './App';

import {About2Container} from './About2';

import {store} from './main';

const SuperApp = () => {
    
    //console.log('SuperApp');

    return (
        <div>
            <AppContainer />

            <Router history={hashHistory}>
                <div>
                    <Route 
                        path="/marko/:id"
                        getComponent={(nextState, cb) => {
                            
                            cb(null, dispatchAndReturnComponent );
                        }}
                    />

                    <Route path="/" component={About} />
                </div>
            </Router>
        </div>
    );
};

var dispatchAndReturnComponent = ({routeParams}) => {

    console.log('dispatchiram');
    setTimeout(() => { store.dispatch({type: 'ACTION_ROUTE'}); }, 2000);

    return <About2Container i={routeParams.id}/>;
};

var About = () => (<div>Prva ruta</div>);




export {SuperApp};