import "./appt.css"
import apptImg from '../../assets/mountain.jpg'

export default function Appt () {
    return (
        <div className="apptWrap">
            <div className="apptContent">
                <h1>Make an Appointment</h1>
                <p> Here's some text about how you should make an appointment 
                    or how to do that or whatever.</p>
                <button> Click here</button>    
            </div>
        
                <img src={apptImg} alt="appointment" className="blockPhoto" />
        </div>

    )
}