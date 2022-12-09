// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');


// DIVS
var phoneDIV = document.getElementById("phoneDIV");

//INFORMATION
var PHONE = [
    { name: 'iPhone 14', price: 10500 },
    { name: 'Huawei 8i', price: 11000 },
    { name: 'Samsung J8', price: 12000 }
];

//HTML
function HTMLphoneProduct(con) {
    let URL = `../img/phones/phone${con}.jpeg`;
    let btn = `btnPHONE${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" background-size="cover;" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${PHONE[con - 1].name}</p>
                    <p class="card-text">Price: ${PHONE[con - 1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button id="${btn}" type="button" onclick="cart('${PHONE[con - 1].name}','${PHONE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

//ANIMATION 
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Added to shopping cart'
    });
}

// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
}

(() => {
    for (let index = 1; index <= 6; index++) {
        phoneDIV.innerHTML += `${HTMLphoneProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
})();