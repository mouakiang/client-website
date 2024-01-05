import {Nav} from './nav/nav.jsx'
import React from 'react';


import RoutesComponent from './routes.jsx';

export function Layout () {
   return (
    <>
        <Nav />
        <RoutesComponent />
        
    </>
   ) 
}