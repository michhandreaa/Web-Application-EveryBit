// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

// DIVS
var pcDIV = document.getElementById("pcDIV");

//INFORMATION
var PC = [
    { name: 'Legion Gaming PC', price: 20000 },
    { name: 'iBUYPOWER BB985V2', price: 15000 },
    { name: 'iBUYPOWE Element Mini', price: 18000 },
    { name: 'SkyTech Archangel 3.0', price: 23000 },
    { name: 'ABS Master ALI432', price: 16000 },
    { name: 'aegis se 10si', price: 13000 }
];

//HTML
function HTMLpcProduct(con) {
    let URL = `../img/computers/computer${con}.jpeg`;
    let btn = `btnPC${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" background-size="cover;" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${PC[con - 1].name}</p>
                    <p class="card-text">Price: ${PC[con - 1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button id="${btn}" type="button" onclick="cart('${PC[con - 1].name}','${PC[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
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
        pcDIV.innerHTML += `${HTMLpcProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
})();