let products = [
    {
        name: "Laptop",
        category: "electronics",
        price: "$800"
    },
    {
        name: "T-Shirt",
        category: "clothes",
        price: "$20"
    },
    {
        name: "Mobile",
        category: "electronics",
        price: "$500"
    }
];

function displayProducts(items) {

    let productList = document.getElementById("product-list");

    productList.innerHTML = "";

    items.forEach(product => {

        productList.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.category}</p>
            </div>
        `;
    });
}

function filterProducts(category) {

    if (category === "all") {
        displayProducts(products);
    } else {

        let filtered = products.filter(
            product => product.category === category
        );

        displayProducts(filtered);
    }
}

displayProducts(products);