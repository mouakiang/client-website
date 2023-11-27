import "./about.css"
import aboutImg from '../../assets/about.jpg'

export function About () {
    return (
        <div className="aboutWrap">
            <img src={aboutImg} alt="map" className="blockPhoto" />
            <div className="aboutContent">
                <h1>I am cool.</h1>
                <p> Why don't you click the link to find out 
                    some reasons why I'm better than you. And you should
                    probably buy a car from me. 
                </p>
                <button className="aboutBtn"> About Me </button>    
            </div>
            
        </div>

    )
}