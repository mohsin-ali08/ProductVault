function addProduct() {
  let productTitle = document.getElementById("productTitle").value;
  let productPrice = document.getElementById("productPrice").value;
  let productDescription = document.getElementById("productDescription").value;
  let productImg = document.getElementById("productImg").value;

  if (!productTitle || !productPrice || !productDescription || !productImg) {
    alert("All fields are required!");
    return;
  }

  // Create a product object
  var product = {
    title: productTitle,
    price: productPrice,
    description: productDescription,
    image: productImg,
  };

  // Save the product data to localStorage
  var productList = JSON.parse(localStorage.getItem("products")) || [];
  productList.push(product);
  localStorage.setItem("products", JSON.stringify(productList));

  // Redirect to products.html
  window.location.href = "../product/product.html";
}
