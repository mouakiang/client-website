import "./appt.css"
import apptImg from '../../assets/mountain.jpg'

export function Appt () {
    return (
        <div className="apptWrap">
            <div className="content">
                <h1>Make an Appointment</h1>
                <p> Here's some text about how you should make an appointment 
                    or how to do that or whatever.</p>
                <button> Click here</button>    
            </div>
        
                <img src={apptImg} alt="appointment" className="photo" />
        </div>

    )
}