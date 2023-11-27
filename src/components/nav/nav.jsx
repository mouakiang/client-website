import './nav.css';
import logo from '../../assets/SV.png';

export function Nav () {
    return (
        <div className="topnav" id="myTopNav">
            <div className="navName"><img src={logo} alt='logo' className='navLogo'/></div>
            <div className="navLinks">
                <h3>Link 1</h3>
                <h3>Link 2</h3>
                <h3>Link 3</h3>
            </div>
        </div>
    )
}