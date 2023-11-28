import './nav.css';
import logo from '../../assets/SV.png';
import contactImg from '../../assets/contact.png';

export function Nav () {
    return (
        <div className="topnav" id="myTopNav">
            <div className="navName"><img src={logo} alt='logo' className='navLogo'/></div>
            <div className="navLinks">
                <h3>HOME</h3>
                <h3>ABOUT</h3>
                <h3>LOCATION</h3>
            </div>
                <button className='navContactBtn'>
                    <img src={contactImg} alt='contact' className='contactBtnImg' />Contact Me</button>
        </div>
    )
}