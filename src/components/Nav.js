import { Link } from "react-router-dom";
import { config, config_dropdown_links, config_navbar_links } from "../config"

const NavBrand = () => {
    return (
        <div className="d-flex">
            <Link to="/" className="navbar-brand text-white">{config.SITENAME}</Link>
        </div>
    );
}

const NavDropdownLinks = ({name, link}) => {
    return (
        <li><a className="dropdown-item fd_font_color_secondary" href={link}>{name}</a></li>
    );
}

const Offcanvas = () => {
    return (
        <>
            <div className="d-lg-none">
                <i className="bi bi-three-dots text-white" style={{ fontSize: 25 }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" />
            </div>

            <div className="offcanvas offcanvas-end bg-dark" data-bs-scroll="true" tabIndex={-1} id="offcanvasNavbar" >
                <div className="offcanvas-header">
                    <Link to="/" className="offcanvas-title text-white text-decoration-none me-auto" id="offcanvasNavbarLabel">
                        {config.SITENAME}
                    </Link>
                    <button type="button" className="text-white btn btn-link" data-bs-dismiss="offcanvas" >
                        <i className="bi bi-x-lg" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {config_navbar_links.map((item) => 
                            <li className="nav-item">
                                <Link to={item.links} className="nav-link text-white" key={item.links}>{item.name}</Link>
                            </li>
                        )}

                        
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle text-white btn btn-link" href="#"data-bs-toggle="dropdown">
                                Other
                            </button>
                            <ul className="dropdown-menu" data-bs-theme="dark">
                                {config_dropdown_links.map((item) => 
                                    // console.log("datas " + item.links)
                                    <NavDropdownLinks name={item.name} link={item.links} key={item.links}/>
                                )}
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}

const NavLinks = () => {
    

    return (
        <ul className="nav d-none d-lg-flex">
            {config_navbar_links.map((item) => 
                <li className="nav-item">
                    <Link to={item.links} className="px-2 px-lg-4 nav-link text-white fd_link_hoverable" key={item.links}>{item.name}</Link>
                </li>
            )}
           
            <li>
                <div className="dropdown" data-bs-theme="dark">
                    <button className="px-2 px-lg-4 nav-link text-white fd_link_hoverable dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                    </button>
                    <ul className="fd_bg_color dropdown-menu ">
                        {config_dropdown_links.map((item) => 
                            <NavDropdownLinks name={item.name} link={item.links} key={item.links}/>
                        )}
                    </ul>
                </div>
            </li>
        </ul>
    );
}


const NavBody = () => {
    return (
        <nav className="navbar bg-dark fixed-top" >
            <div className="container-fluid">
                <NavBrand />
                {/* <Separator /> */}
                <NavLinks />
                <Offcanvas />
            </div>
        </nav>
    );
}

export default function Nav() {
    return (
        <NavBody />
    );
}