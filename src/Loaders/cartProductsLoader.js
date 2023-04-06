import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // If cart is in database,you have use async await
    const storedCart = getShoppingCart();
    const savedCart = []
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // If you need send to two thing
    // return [savedCart,products]
    // Another option
    // return{cart: savedCart,products}
    return savedCart;

}
export default cartProductsLoader;