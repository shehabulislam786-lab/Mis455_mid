let cartCount = 0;

function showOffer() {
  document.getElementById("offer").style.display = "block";
}

function addToCart(name) {
  cartCount++;
  alert(name + " added to cart! Total items: " + cartCount);
}

function sendMessage() {
  const n = document.getElementById("name").value;
  document.getElementById("msg-status").textContent = "Thanks, " + n + "! We will contact you soon.";
}