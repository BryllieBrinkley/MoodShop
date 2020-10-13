const itemsContainer = document.getElementById('items');

const itemList = document.getElementById('item-list');

itemList.innerHTML = '<li> Hello World</li>'
console.log(itemList);

import data from './data.js';

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item';

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image;
    img.width = 300;
    img.height = 300;

    // Add the image to the div
    newDiv.appendChild(img);
    // put new div inside items container
    itemsContainer.appendChild(newDiv);

// create a paragraph element for a description
let desc = document.createElement('p');

// give the paragraph text from the data
desc.innerText = data[i].desc;

// append the paragraph to the div
newDiv.appendChild(desc);

// do the same thing for price
let price = document.createElement('p');
price.innerText = data[i].price;
newDiv.appendChild(price);

let button = document.createElement('button');
button.id = data[i].name;

// creates a custom attribute called data-price. That will hold price for each element in the button
button.dataset.price = data[i].price;
button.innerHTML = "Add to Cart";
newDiv.appendChild(button);

const cart = [ ];

function addItem(name, price) {
    const item = { name, price, qty: 1};
    cart.push(item);
  for (let i = 0; i < cart.length; i+= 1) {
    if(cart[i].name === name) {
      cart[i].qty += 1;
      return;
  }
}
function showItems(){
  const qty = 0;
  console.log(`You have ${cart.length} items in your cart!`);

  let itemStr = ' ';
  for (let i = 0; i < cart.length; i+= 1) {
   console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`);

}

itemList.innerHTML = itemStr;
  }}
console.log(`Total in cart: $${getTotal()}`);

function getQty() {
  let qty = 0;
  for (let i = 0; i < cart.length; i+= 1) {
    qty+= cart[i].qty;
  }
  return qty;
}

function getTotal() {
  const cart = [ ];
  let total = 0;
  for (let i = 0; i < cart.length; i+= 1) {
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
}
function removeItem(name, qty= 0) {
  for (let i = 0; i < cart.length; i+= 1) {
    if(cart[i].name === name) {
      if(qty > 0) {
        cart[i].qty -= qty;
      }
      if(cart[i].qty < 1 || qty === 0) {
      cart.splice(i, 1);
      }

    addItem('Spongebob', 5.99)
    addItem('Sad', 5.99)
    addItem('Spongebob', 5.99)
    showItems()

// got all the way to cart to working in console but edited and broke just a little. 
    }}}}