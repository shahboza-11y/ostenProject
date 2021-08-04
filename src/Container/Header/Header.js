import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import osten from './osten.svg'
const Header = () => {
    return (
        <div className="bg-light Header shadow ">
            <div className="container">
                <header>
                    <div className=" d-flex justify-content-between align-items-center">
                        <div>
                            <img className="logoImg" src={osten} alt="error image " />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header