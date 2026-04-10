var total = 0;
var count = 0;
function addToCart(imageSrc, price) {
    count++;
    total += price;


    var cart = document.getElementById("cart");

    var itemWrapper = document.createElement("div");
    itemWrapper.className = "cart-item";

    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.width = "50px";

    var priceTag = document.createElement("p");
    priceTag.textContent = " price: $" + price;

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function(){
        count--;
        total -= price;
        document.getElementById("count").textContent = count;
        document.getElementById("total").textContent = total;
        itemWrapper.remove();
    };

    itemWrapper.appendChild(img);
    itemWrapper.appendChild(priceTag);
    itemWrapper.appendChild(removeBtn);

    cart.appendChild(itemWrapper);

    document.getElementById("count").textContent = count;
    document.getElementById("total").textContent = total;

    alert("Items added");
    
}