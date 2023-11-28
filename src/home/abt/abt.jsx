import "./abt.css"
import aboutImg from '../../assets/about.jpg'

import {useNavigate} from 'react-router-dom'

export default function Abt () {

    const navigate = useNavigate()

    const aboutClickHandler = () => {
    navigate("/about")
  }

    return (
        <div className="aboutWrap">
            <img src={aboutImg} alt="map" className="blockPhoto" />
            <div className="aboutContent">
                <h1>I am cool.</h1>
                <p> Why don't you click the link to find out 
                    some reasons why I'm better than you. And you should
                    probably buy a car from me. 
                </p>
                    <button className="aboutBtn" onClick={aboutClickHandler}> About Me </button> 
            </div>
        </div>
    )
}