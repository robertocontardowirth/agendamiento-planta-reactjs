import { useLocation } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';

export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path) => {
    return (
      "step nav-item " + (path === location.pathname ? "active" : '')
    );
  };
 
  return (
    <nav className="App-stepper">
        <ol className="App-nav">
          <li className={getLinkClass("/")}>
            <span className="icono">
                <FeatherIcon icon="users" />
            </span>
          </li>
          <li className={getLinkClass("/residuo")}>
            <span className="icono">
                <FeatherIcon icon="truck" />
            </span>
          </li>
          <li className={getLinkClass("/fecha")}>
            <span className="icono">
                <FeatherIcon icon="calendar" />
            </span>
          </li>
          <li className={getLinkClass("/confirmacion")}>
            <span className="icono">
                <FeatherIcon icon="check-circle" />
            </span>
          </li>
        </ol>
    </nav>
  );
};