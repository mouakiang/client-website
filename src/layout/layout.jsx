import {Nav} from './nav/nav.jsx'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes.jsx';

export function Layout () {
   return (
    <>
        <Nav />
        <Router>
            <RoutesComponent />
        </Router>
    </>
   ) 
}