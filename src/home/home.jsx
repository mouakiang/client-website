import  Appt  from './appt/appt';
import Abt from './abt/abt';
import  Map  from './map/map';
import TestimonialSlider from './testimonial/testimonial.jsx';
import testimonialsData from './testimonial/testimonial.json';


export default function Home () {
    return (
        <>
        <Appt />
        <Abt />
        <Map />
        <TestimonialSlider testimonials={testimonialsData} />
        </>
    )
}