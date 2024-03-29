import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss"

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);
    
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-blocks">
                    <span>Product</span>
                </div>
                <div className="header-blocks">
                    <span>Description</span>
                </div>
                <div className="header-blocks">
                    <span>Quantity</span>
                </div>
                <div className="header-blocks">
                    <span>Price</span>
                </div>
                <div className="header-blocks">
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                    ))
                }
                <span className="total">Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout