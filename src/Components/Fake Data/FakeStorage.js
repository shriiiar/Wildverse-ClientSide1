const addGame = (game) => {
    let cart = [], flag = 0;
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    for (const items of cart) {
        if (items._id === game._id) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        cart.push(game);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
}

const addPackage = (item) => {
    let packages = [], flag = 0;
    const storedCart = localStorage.getItem('packages');
    if (storedCart) {
        packages = JSON.parse(storedCart);
    }
    for (const items of packages) {
        if (items._id === item._id) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        packages.push(item);
    }
    localStorage.setItem('packages', JSON.stringify(packages));

    return packages;
}

const getGames = () => {
    let cart = [];
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const getPackages = () => {
    let packages = [];
    const storedCart = localStorage.getItem('packages');
    if (storedCart) {
        packages = JSON.parse(storedCart);
    }
    return packages;
}

export {
    addGame,
    addPackage,
    getGames,
    getPackages
}