import "./map.css";
import arrow from "../../assets/arrow.png";
import mapImg from "../../assets/map.jpg";
import { Link } from "react-router-dom";

export default function Map() {
  return (
    <div className="mapWrap">
      <div className="mapContent">
        <h1>LOCATION</h1>
        <p>
          Ready to connect? Click here to find my current location and learn
          how you can easily reach out to me.
        </p>
        <Link to="/location">
          <button className="mapBtn">
            Find My Location <img src={arrow} alt="arrow" className="arrowImg" />
          </button>
        </Link>
      </div>
      <img src={mapImg} alt="map" className="blockPhoto" />
    </div>
  );
}
