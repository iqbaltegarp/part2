function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(product => product.id === id);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

async function fetchProducts() {
    const response = await fetch('api/get_products.php');
    const products = await response.json();

    document.getElementById('product-list').innerHTML = products.map(product => `
        <div class="product">
            <img src="uploads/${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                Buy
            </button>
        </div>
    `).join('');
}

fetchProducts();
