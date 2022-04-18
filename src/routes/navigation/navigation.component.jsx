import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.png";

const Navigation = () =>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <img style={{width: "3.5vw", height: "6vh" }} src={logo} alt="crownLogo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;