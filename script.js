let count = 0;
let total = 0;

function addToCart(price) {

count++;
total += price;

document.getElementById("count").innerText = count;
document.getElementById("total").innerText = total;

alert("تمت إضافة المنتج للسلة 🛒");
}