document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product");

    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        productContainer.innerHTML = "<p>Product not found.</p>";
        return;
    }

    // Fetch the product details using the ID
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            productContainer.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h1>${product.title}</h1>
                <div class="product-price">$${product.price}</div>
                <p class="product-description">${product.description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching product:", error);
            productContainer.innerHTML = "<p>Failed to load product details.</p>";
        });
});
