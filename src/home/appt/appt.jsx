import "./appt.css";
import apptImg from "../../assets/calendar-appointment.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

export default function Appt() {
  return (
    <div className="apptWrap">
      <div className="apptContent">
        <h1>MAKE AN APPOINTMENT</h1>
        <p>
          Schedule your appointment with ease - click here to find a convenient
          time and date for our meeting. Let's connect and discuss your needs at
          a time that works best for you!
        </p>
        <Link to="/appointment">
          <button className="schdBtn">
            Schedule Here <img src={arrow} alt="arrow" className="arrowImg" />
          </button>
        </Link>
      </div>
      <div className="photo-frame">
        <img src={apptImg} alt="appointment" className="blockPhoto" />
      </div>
    </div>
  );
}
