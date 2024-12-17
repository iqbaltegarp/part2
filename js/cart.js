let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
        totalPrice.innerText = "0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="uploads/${item.image}" alt="${item.name}" width="100">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>
                        Quantity: 
                        <input type="number" min="1" value="${item.quantity}" 
                            onchange="updateQuantity(${index}, this.value)">
                    </p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
            <hr>
        `;
    }).join('');

    totalPrice.innerText = total.toFixed(2);
}

function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    localStorage.removeItem('cart');
    alert("Thank you for your purchase!");
    window.location.reload();
}

displayCart();
