document.addEventListener('DOMContentLoaded', function() {
  var productList = JSON.parse(localStorage.getItem('products')) || [];
  var productContainer = document.getElementById('productList');

  if (productList.length > 0) {
    productList.forEach(function(product, index) {
      var productCard = document.createElement('div');
      productCard.classList.add('relative-container', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'max-w-xs', 'w-full', 'text-center', 'transition-transform', 'transform', 'hover:scale-105', 'relative');
      productCard.innerHTML = `
        <div class="relative">
          <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg mb-4">
          <button class="delete-btn absolute bottom-2 right-2 bg-red-500 text-white hover:bg-red-600" onclick="deleteProduct(${index})">
            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18M6 18L18 6"/></svg>
          </button>
        </div>
        <h2 class="text-xl font-semibold text-gray-800">${product.title}</h2>
        <p class="text-gray-600 mt-2">Price: $${product.price}</p>
        <p class="text-gray-500 mt-2">${product.description}</p>
      `;
      productContainer.appendChild(productCard);
    });
  } else {
    productContainer.innerText = "No products added yet!";
  }
});

function createNewProduct() {
  window.location.href = '../index.html';
}

function editProduct(index) {
  // Handle edit product logic here
  alert(`Edit product at index ${index}`);
}

function deleteProduct(index) {
  var productList = JSON.parse(localStorage.getItem('products')) || [];
  productList.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(productList));
  location.reload(); // Reload the page to reflect changes
}