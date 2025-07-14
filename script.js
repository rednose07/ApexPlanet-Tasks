const products = [
  { name: "Laptop", category: "electronics", price: 999, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 19, rating: 4.2 },
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.6 },
  { name: "Novel", category: "books", price: 12, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 45, rating: 4.1 },
  { name: "Headphones", category: "electronics", price: 129, rating: 4.3 },
  { name: "Textbook", category: "books", price: 35, rating: 4.4 }
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");
const sortBy = document.getElementById("sort-by");

function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Rating:</strong> ${product.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

 
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }


  const sort = sortBy.value;
  if (sort === "price-low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortBy.addEventListener("change", filterAndSortProducts);


displayProducts(products);
