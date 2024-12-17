document.getElementById('add-product-form').onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', document.getElementById('product-name').value);
    formData.append('description', document.getElementById('product-desc').value);
    formData.append('price', document.getElementById('product-price').value);
    formData.append('image', document.getElementById('product-image').files[0]);

    const res = await fetch('api/add_product.php', {
        method: 'POST',
        body: formData
    });

    const result = await res.json();
    alert(result.message || result.error);
};