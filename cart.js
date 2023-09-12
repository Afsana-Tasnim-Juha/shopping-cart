const addProduct = () => {
    const productField = document.getElementById('product-name');
    const QuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = QuantityField.value;

    productField.value = '';
    QuantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage();
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage = (product, quantity) => {

}
