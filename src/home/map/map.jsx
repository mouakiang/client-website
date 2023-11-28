import "./map.css"
import mapImg from '../../assets/map.jpg'
import {useNavigate} from 'react-router-dom'

export default function Map () {
    
const navigate = useNavigate()

  const handleClick = () => {
    navigate("/location")
  }
    
    return (
        <div className="mapWrap">
            <div className="mapContent">
                <h1>Find me! I dare you.</h1>
                <p> Here's some text about how you can 
                    click here and it will show you a map and stuff.</p>
                <button className="mapBtn" onClick={handleClick}> Map Button</button>   

            </div>
            <img src={mapImg} alt="map" className="blockPhoto" />
        </div>

    )
}