// DOM Nodes

let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("img:nth-child(2)");
let image3 = document.querySelector("img:nth-child(3)");

// keep each product in an object
function odProduct(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.timesShown = 0;
  this.view = 0;
}

// function to choose a random product
function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

// function to render 3 random products
function renderProducts() {
  // get 3 random indexes from our product array
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  // prevent the two images being the same product
  while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index
  ) {
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
  }

   // change the imgPath of our 3 images
   image1.imgPath = allProducts[product1Index].imgPath;
   image2.imgPath = allProducts[product2Index].imgPath;
   image3.imgPath = allProducts[product3Index].imgPath;
   image1.alt = allProducts[product1Index].name;
   image2.alt = allProducts[product2Index].name;
   image3.alt = allProducts[product3Index].name;
  

    // number of times products have been shown
  allProducts[product1Index].timesShown++;
  allProducts[product2Index].timesShown++;
  allProducts[product3Index].timesShown++;
}

// handle the goat being clicked
function handleProductClick(event) {
  // get the name of the product we just clicked
  let clickedProduct = event.target.alt;

  // check if the click is on an image
  if (event.target === productContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderProducts();
  }

  // increase the clicks of the products
  // loop through allProducts
  // for (let i = 0; i < allGoats.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    // if (clickedGoat === allGoats[i].name) {
      // increase the number of clicks
     // allGoats[i].clicks++;
      // stop the for loop because we found the goat
      // break;
    }
  }
}



  
  // make the products
  const allProducts = [
    new odProduct("bag", "./201-11/bag.jpg"),
    new odProduct("banana", "./201-11/banana.jpg"),
    new odProduct("bathroom", "./201-11/bathroom.jpg"),
    new odProduct("boots", "./201-11/boots.jpg"),
    new odProduct("breakfast", "./201-11/breakfast.jpg"),
    new odProduct("bubblegum", "./201-11/bubblegum.jpg"),
    new odProduct("chair", "./201-11/chair.jpg"),
    new odProduct("cthulhu", "./201-11/cthulhu.jpg"),
    new odProduct("dog-duck", "./201-11/dog-duck.jpg"),
    new odProduct("dragon", "./201-11/dragon.jpg"),
    new odProduct("pen", "./201-11/pen.jpg"),
    new odProduct("pet-sweep", "./201-11/pet-sweep.jpg"),
    new odProduct("scissors", "./201-11/scissors.jpg"),
    new odProduct("shark", "./201-11/shark.jpg"),
    new odProduct("sweep", "./201-11/sweep.jpg"),
    new odProduct("tauntaun", "./201-11/tauntaun.jpg"),
    new odProduct("unicorn", "./201-11/unicorn.jpg"),
    new odProduct("water-can", "./201-11/water-can.jpg"),
    new odProduct("wine-glass", "./201-11/wine-glass.jpg"),
  ];
