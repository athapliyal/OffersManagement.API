import { Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div className="header__wrapper">
            <Navbar expand bg="dark" variant="dark">
                <Link className="navbar-brand" to="/">Plexure Campaigns</Link>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/offers"><i className="fas fa-tags"></i> Offers</Link>
                    <Link className="nav-link" to="/bulk-import"><i className="fas fa-upload"></i> Importer</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to="/logout">Logout</Link>                    
                </Nav>
            </Navbar>
        </div>
    );
};
