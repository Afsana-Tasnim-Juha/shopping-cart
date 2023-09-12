const addProduct = () => {
    const productField = document.getElementById('product-name');
    const QuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = QuantityField.value;
    productField.value = '';
    QuantityField.value = '';
    console.log(product, quantity);
}
