import "./Scss/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

let NavBar = () => {
    return (
        <>
            <nav>
                <h2>
                    <a href="#">Cafecito</a>
                </h2>
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                    <li>
                        <a href="#">NOSOTROS</a>
                    </li>
                    <li>
                        <a href="#" className="carrito">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
