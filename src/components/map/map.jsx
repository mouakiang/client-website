import "./appt.css"
import mapImg from '../../assets/map.jpg'

export function Map () {
    return (
        <div className="mapWrap">
                <img src={mapImg} alt="map" className="photo" />
                <div className="content">
                <h1>Find me! I dare you.</h1>
                <p> Here's some text about how you can 
                    click here and it will show you a map and stuff.</p>
                <button> Map Button</button>    
            </div>
        </div>

    )
}