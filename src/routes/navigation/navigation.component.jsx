import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.png";

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils"

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

import "./navigation.styles.jsx"

const Navigation = () =>{ 
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                        <img style={{width: "50px", height: "50px" }} src={logo} alt="crownLogo" />
                </LogoContainer>
                <NavLinks>
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <NavLink  as='span' onClick={signOutUser}>Sign Out</NavLink>
                           ) : (
                                <NavLink to="/auth">
                                    Sign In
                                </NavLink>
                            )
                        
                    }
                    <CartIcon/>
                </NavLinks>
                { isCartOpen && <CartDropdown/>}
                {/* { Evaluates the statement and if both its sides true, it returns what was passed last === Cart Dropdown } */}
            </NavigationContainer>
            <Outlet/> 
        </Fragment>
    );
}

export default Navigation;