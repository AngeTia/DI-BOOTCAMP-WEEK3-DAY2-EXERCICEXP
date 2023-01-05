// Retrieve the form and log it
const form = document.forms[0];
console.log(form);

// Retrieve the inputs by their id and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput);
console.log(lastNameInput);

// Retrieve the inputs by their name attribute and log them
const inputsByName = form.elements;
console.log(inputsByName.fname);
console.log(inputsByName.lname);

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Récupère les valeurs à l'entrée
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Vérifier que le champ n'est pas vide
    if (firstName === '' || lastName === '') {
        alert("S'il vous plait veuillez renseigner le champ vide!");
        return;
    }

    // Creation de l'élémnet "li"
    const firstNameItem = document.createElement('li');
    firstNameItem.textContent = firstName;
    const lastNameItem = document.createElement('li');
    lastNameItem.textContent = lastName;

    // Ajout de l'élément "li" à la balise "ul"
    const answerList = document.querySelector('.usersAnswer');
    answerList.appendChild(firstNameItem);
    answerList.appendChild(lastNameItem);
})