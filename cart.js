const addProduct = () => {
    const productField = document.getElementById('product-name');
    const QuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = QuantityField.value;

    productField.value = '';
    QuantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}
