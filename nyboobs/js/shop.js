/*
  shop.js — builds the product cards on the home page from products.js.

  You shouldn't need to edit this file. To change products, edit products.js.
*/

// Find the empty box in index.html where the cards go.
const grid = document.getElementById("product-grid");

// Escape text so a stray < or & in a product name can't break the page.
function safe(text) {
  const div = document.createElement("div");
  div.textContent = text == null ? "" : String(text);
  return div.innerHTML;
}

// Build one card's HTML for one product.
function productCard(product) {
  let button;
  if (product.soldOut) {
    button = '<span class="button button-disabled">Sold out</span>';
  } else if (product.buyLink) {
    // Opens Stripe's secure checkout page.
    button = '<a class="button" href="' + safe(product.buyLink) + '">Buy now</a>';
  } else {
    button = '<span class="button button-disabled">Coming soon</span>';
  }

  const sizes = (product.sizes || []).map(safe).join(" · ");

  return (
    '<article class="card">' +
      '<img src="' + safe(product.image) + '" alt="' + safe(product.name + ", " + product.color) + '" loading="lazy">' +
      '<div class="card-body">' +
        '<h3>' + safe(product.name) + '</h3>' +
        '<p class="card-meta">' + safe(product.color) + '</p>' +
        (sizes ? '<p class="card-sizes">Sizes: ' + sizes + '</p>' : '') +
        '<div class="card-footer">' +
          '<span class="price">' + safe(product.price) + '</span>' +
          button +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

// Put every card into the grid.
grid.innerHTML = PRODUCTS.map(productCard).join("");
