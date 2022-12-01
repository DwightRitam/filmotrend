import React from "react";

import { createContext, useContext, useState, useEffect } from "react";


const context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuanitites, setTotalQuanitites] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;
    let cartobj;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuanitites((prevTotalQuantities) => prevTotalQuantities + quantity);
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id ===
            product._id)
        const newCartItems = cartItems.filter((item) => item._id !==   product._id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)

        setTotalQuanitites(prevTotalQuantities =>
            prevTotalQuantities - foundProduct.quantity)
            setCartItems(newCartItems)
            localStorage.removeItem("cartitem")


    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id ===
            id)
        index = cartItems.findIndex((product) => product._id ===
            id);
        const newCartItems = cartItems.filter((item) => item._id !== id)
        if (value === "inc") {
            setCartItems([...newCartItems, {
                ...foundProduct,
                quantity: foundProduct.quantity + 1
            }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice +
                foundProduct.price)
            setTotalQuanitites(prevTotalQuantities => prevTotalQuantities + 1)

        } else if (value === 'dec') {

            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, {
                    ...foundProduct,
                    quantity: foundProduct.quantity - 1
                }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice -
                    foundProduct.price)
                setTotalQuanitites(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }



    const incQty = () => {
        setQty((prevQty) =>
            prevQty + 1
        )
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <context.Provider
            value={{
                showCart,
                setShowCart,
                totalPrice,
                qty,
                totalQuanitites,
                cartItems,
                incQty,
                decQty,
                onAdd,
                 toggleCartItemQuantity,
                 onRemove,
                 
            }}>
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context)