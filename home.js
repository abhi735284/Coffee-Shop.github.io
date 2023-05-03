const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
  navMenu.classList.toggle("show-menu");
});
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Please enter your message.");
    messageInput.focus();
    return;
  }

  
});
const Order = document.getElementById('Order');
OrderBtn.addEventListener('click', () => {
  alert(`Your order for a total of ${totalPrice} has been confirmed.`);
});
const totalPrice = document.getElementById('totalPrice').textContent;
function calculateTotal() {
  const checkboxes = document.getElementsByName("item");
  let totalPrice = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      switch (checkboxes[i].value) {
        case "Espresso":
          totalPrice += 399.00;
          break;
        case "Latte":
          totalPrice += 70.00;
          break;
        case "Cappuccino":
          totalPrice += 175.00;
          break;
        case "Mocha":
          totalPrice += 215.00;
          break;
        case "Frappe":
          totalPrice +=250.00;
          break;
        case "Flat White":
          totalPrice +=350.00;
          break;
        case "Americano":
          totalPrice +=400.00;
          break;
        case "Affogato":
          totalPrice +=299.00;
          break;



      }
    }
  }
  document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
}


