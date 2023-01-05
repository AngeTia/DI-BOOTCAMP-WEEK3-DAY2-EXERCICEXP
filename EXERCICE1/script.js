// Retrieve h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// Remove last paragraph in article tag
const article = document.querySelector('article');
const p = article.querySelectorAll('p');
article.removeChild(p[p.length - 1]);

// Add event listener that changes h2 background color to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// Add event listener that hides h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// Add button that makes paragraphs bold when clicked
const button = document.createElement('button');
button.innerText = 'Rendre le texte en gras';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => {
        p.style.fontWeight = 'bold';
    });
});

// Bonus: set h1 font size to random pixel size between 0 and 100 when hovered over
h1.addEventListener('mouseenter', () => {
    const size = Math.floor(Math.random() * 100);
    h1.style.fontSize = `${size}px`;
});
  
// Bonus: fade out second paragraph when hovered over
p[1].addEventListener('mouseover', () => {
    p[1].style.animation = 'fadeOut 1s';
});