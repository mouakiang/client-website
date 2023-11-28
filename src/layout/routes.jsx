import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../home/home';
import Appointment from '../components/appointment/appointment';
import Location from '../components/location/location'
import About from '../components/about/about';

export default function RoutesComponent () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/about' element={<About />} />
            <Route path='/location' element={<Location />} />
        </Routes>
    )
}
