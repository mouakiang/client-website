import "./abt.css";
import aboutImg from "../../assets/SVEdit01.jpg";
import { Link } from "react-router-dom";

export default function Abt() {
  return (
    <div className="aboutWrap">
      <img src={aboutImg} alt="map" className="blockPhoto" />
      <div className="aboutContent">
        <h1>MY STORY</h1>
        <p>
          Discover my journey: from humble beginnings to becoming a skilled
          professional in my field. Click here to explore my story, learn about
          my expertise, and understand how I can contribute to your success.
        </p>

        <Link to="/about">
          <button className="aboutBtn">About Me</button>
        </Link>
      </div>
    </div>
  );
}
