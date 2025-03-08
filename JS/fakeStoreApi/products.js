document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">$${product.price}</div>
                `;

                // Redirect to product details page on click
                productCard.addEventListener("click", () => {
                    window.location.href = `product.html?id=${product.id}`;
                });

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
