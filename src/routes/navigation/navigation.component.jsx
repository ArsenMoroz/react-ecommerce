import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.png";

import "./navigation.styles.scss"

const Navigation = () =>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <img style={{width: "50px", height: "50px" }} src={logo} alt="crownLogo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;