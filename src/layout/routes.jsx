import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Home } from '../home/home';
import Appointment from '../components/appointment';
import Location from '../components/location'
import About from '../components/about';

export function Routes () {
    return (
        <Switch>
            <Route exact={true} path='/'>
                <Redirect to={'/home'} />
            </Route>

            <Route path='/home'>
                <Home />
            </Route>

            <Route path='/appointment'>
                <Appointment />
            </Route>

            <Route path='/location'>
                <Location />
            </Route>

        </Switch>
        
    )
}