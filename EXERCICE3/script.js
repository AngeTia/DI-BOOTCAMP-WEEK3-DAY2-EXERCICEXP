var allBoldItems;

function getBoldItems() {
  // Use the document.querySelectorAll() method to select all the bold items in the paragraph
  allBoldItems = document.querySelectorAll("p strong");
  console.log(allBoldItems)
  
}

function highlight() {
  // Iterate over all the bold items and change their color to blue
  getBoldItems();
  allBoldItems.forEach(item => item.style.color = "blue");
}

function returnNormal() {
  // Iterate over all the bold items and change their color back to black
  getBoldItems();
  allBoldItems.forEach(item => item.style.color = "black");
}

// Use the addEventListener() method to attach the highlight and returnNormal functions to the mouseover and mouseout events on the paragraph element
document.querySelector("p").addEventListener("mouseover", highlight);
document.querySelector("p").addEventListener("mouseout", returnNormal);