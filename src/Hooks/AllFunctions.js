import { useState } from "react";
import { addGame, addPackage } from "../Components/Fake Data/FakeStorage";

const AllFunctions = () => {
    const [cart, setCart] = useState([]);
    const [Packages, setPackages] = useState([]);

    const addToCart = (game) => {
        const storedCart = addGame(game);
        setCart(storedCart);

    }

    const addToPackage = (item) => {
        const storedCart = addPackage(item);
        setPackages(storedCart);
    }

    const DeleteItem = (game) => {
        let newCart = [], index = 0;
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            newCart = JSON.parse(storedCart);
        }

        for (const items of newCart) {
            if (items._id === game._id) {
                break;
            }
            index++;
        }
        newCart.splice(index, 1);
        if (newCart.length !== 0) localStorage.setItem('cart', JSON.stringify(newCart));
        else localStorage.removeItem('cart');
        setCart(newCart);
    }

    const emptyCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    }

    const emptyPackage = () => {
        localStorage.removeItem('packages');
        setPackages([]);
    }
    return [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage];
}

export default AllFunctions;