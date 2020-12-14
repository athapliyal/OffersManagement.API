import { Nav, Navbar } from "react-bootstrap";

export const Header: React.FC = () => {
    return (
        <div className="header__wrapper">
            <Navbar expand bg="dark" variant="dark">
                <Navbar.Brand href="#home">Plexure Campaigns</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><i className="fas fa-tags"></i> Offers</Nav.Link>
                    <Nav.Link href="#features"><i className="fas fa-upload"></i> Importer</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Logout</Nav.Link>                    
                </Nav>
            </Navbar>
        </div>
    );
};
