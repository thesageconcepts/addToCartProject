document.addEventListener("DOMContentLoaded", function() {
    

    function  checkAge(e) {
        var b = document.getElementById("tUsername").value;
        var a = document.getElementById("tAge").value;
        if (a < 20){
            alert( "Sorry😭," + b + ". Access Denied!" );
            e.preventDefault()
       }
       else if (a >=20 && a <= 30) {
            alert("Access Granted, " + b + " .Please Proceed😁--->>");
            
       }
       else if (a > 31){
        alert("Sorry😭, " + b + ". Access Denied! " );
        e.preventDefault()
    }
    }
    document.getElementById("f").onsubmit = checkAge;
});

let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: "2-Slice Toaster",
        tag: "Oster2Toster",
        price: 40,
        inCart: 0
    },
    {
        name: "4-Slice Toaster",
        tag: "Oster4Toster",
        price: 50,
        inCart: 0
    },
    {
        name: "1-Slice Toaster",
        tag: "Oster1Toster",
        price: 30,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function revealCart() {
    var content = `<img src="Oster2Toster.jpg" alt="2-slice toaster">
                    <h4>Oster 2-slice Toaster</h4>
                    <h4>$40.00</h4>` 
    var d = document.getElementById("results");
    d.innerHTML = content;
}
revealCart();

// JS for Carts
