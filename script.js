const cart = [];
const totalAmountElement = document.getElementById("total-amount");
const cartItemsElement = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute("data-name");
        const productPrice = parseFloat(productElement.getAttribute("data-price"));

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Ksh ${item.price}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalAmountElement.textContent = `Total: Ksh ${total}`;
}

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout!");
        // Add checkout logic here
    }
});
