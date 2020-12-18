import { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { navigationItems } from "./navigation-config";

import './header.scss';

import { AuthContext } from '../../store/authentication/auth-context';

export const Header: React.FC = () => {
  const { authState } = useContext(AuthContext);

  if (authState.isAuthenticated) {
    return (
      <div className="header__wrapper">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {navigationItems.map((item) => (
                <Link className={item.className} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              ))}
            </Nav>
            <Nav>
              <LanguageDropdown />
              <Link className="nav-link" to="/">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
  return null;
};

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <NavDropdown title={<LanguageSelector />} id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
      <NavDropdown.Item onClick={() => i18n.changeLanguage('jp')}>Japanese</NavDropdown.Item>
    </NavDropdown>
  );
}

const LanguageSelector: React.FC = () => (
  <>
    <i className="fas fa-globe"></i>
  </>
);
