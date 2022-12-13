import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Fozzy's Family!</h1>
            <ul className="nav">
                <li>
                    <Link to='/fozzy'>Me</Link>
                </li>
                <li>
                    <Link to='/about'>Mommy</Link>
                </li>
                <li>
                    <Link to='/profile'>Father&Bro</Link>
                </li>
            </ul>
        </div>
    );
};


export default Header;