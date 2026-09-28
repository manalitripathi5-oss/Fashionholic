// ===============================
// FASHIONHOLIC - JAVASCRIPT
// ===============================


// -------------------------------
// SHOP NOW BUTTON
// -------------------------------

const shopButton = document.querySelector(".hero button");

shopButton.addEventListener("click", function () {
    document.querySelector("#new").scrollIntoView({
        behavior: "smooth"
    });
});


// -------------------------------
// ADD TO CART
// -------------------------------

const cartButtons = document.querySelectorAll(".add-cart");

let cartCount = 0;

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        alert("Item added to your cart! 🛍️");

        updateCart();

    });

});


// -------------------------------
// UPDATE CART ICON
// -------------------------------

function updateCart() {

    const cartIcon = document.querySelector(".icons span:nth-child(2)");

    cartIcon.innerHTML = `🛒 ${cartCount}`;

}


// -------------------------------
// CATEGORY EXPLORE BUTTONS
// -------------------------------

const categoryButtons = document.querySelectorAll(
    ".category-card button"
);

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        document.querySelector("#new").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// -------------------------------
// NAVIGATION LINKS
// -------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// -------------------------------
// WISHLIST
// -------------------------------

const wishlistIcon = document.querySelector(
    ".icons span:first-child"
);

let wishlistActive = false;

wishlistIcon.addEventListener("click", function () {

    wishlistActive = !wishlistActive;

    if (wishlistActive) {

        wishlistIcon.innerHTML = "♥";

        alert("Added to your wishlist ❤️");

    } else {

        wishlistIcon.innerHTML = "♡";

    }

});


// -------------------------------
// PAGE LOAD MESSAGE
// -------------------------------

console.log(
    "Welcome to Fashionholic! 👗✨"
);