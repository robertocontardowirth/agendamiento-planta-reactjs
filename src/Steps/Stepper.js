import { useLocation } from "react-router-dom";
import UsersIcon from '../users.svg';
//import TruckIcon from './truck.svg';
//import CalendarIcon from './calendar.svg';
//import CheckCircleIcon from './check-circle.svg';

export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path) => {
    return (
      "icono " + (path === location.pathname ? "active" : undefined)
    );
  };
 
  return (
    <nav className="App-stepper">
        <ol className="App-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>
              <img src={UsersIcon} alt="Inicio" className="feather" />
            </span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/education")}>Education</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/about")}>About</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/confirm")}>Confirm</span>
          </li>
        </ol>
    </nav>
  );
};