import "./map.css"
import mapImg from '../../assets/map.jpg'
import {Link} from 'react-router-dom'

export default function Map () {
    
    return (
        <div className="mapWrap">
            <div className="mapContent">
                <h1>Find me! I dare you.</h1>
                <p> Here's some text about how you can 
                    click here and it will show you a map and stuff.</p>
                <Link to="/location">
                    <button className="mapBtn"> Map Button</button>   
                </Link>    
            </div>
            <img src={mapImg} alt="map" className="blockPhoto" />
        </div>

    )
}