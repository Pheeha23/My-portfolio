const products = [
    { id: 1, name: 'Water Bottle 1L', price: 2.99 },
    { id: 2, name: 'Water Bottle 500ml', price: 1.99 },
    { id: 3, name: 'Water Bottle 2L', price: 4.99 }
];

const providers = [
    { id: 1, name: 'Provider 1', location: 'New York', price: 2.99 },
    { id: 2, name: 'Provider 2', location: 'Los Angeles', price: 3.49 }
];

const cartItems = [];
let total = 3.50; 

function addToCart(event) {
    event.preventDefault();

    const productSelect = document.getElementById('product-name');
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.text;
    const productPrice = parseFloat(selectedOption.dataset.price);
    const quantity = parseInt(document.getElementById('quantity').value);

    const cartList = document.getElementById('cart-items');
    const newCartItem = document.createElement('li');
    const itemTotal = (productPrice * quantity).toFixed(2);
    
    newCartItem.textContent = `${productName} (${quantity}) - R${itemTotal}`;
    cartList.appendChild(newCartItem);
    
    total += productPrice * quantity;
    document.getElementById('total').textContent = `Total: R${total.toFixed(2)}`;
    document.getElementById('quantity').value = 1;
}

function clearCart() {
    const cartList = document.getElementById('cart-items');
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
    total = 0; 
    document.getElementById('total').textContent = `Total: R${total.toFixed(2)}`;
}