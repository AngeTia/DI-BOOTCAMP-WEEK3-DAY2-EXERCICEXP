const element = document.querySelector('#id');

element.addEventListener('click', () => {
  // Change position x
    element.style.left = '50px';
});

element.addEventListener('mouseover', () => {
  // Change position y
    element.style.top = '50px';
});

element.addEventListener('mouseout', () => {
  // Change color
    element.style.color = 'red';
});

element.addEventListener('dblclick', () => {
  // Change font size
    element.style.fontSize = '20px';
});