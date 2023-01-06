// Define a function to calculate the volume of a sphere
function calculateVolume(radius) {
    // Calculate the volume using the formula: 4/3 * pi * r^3
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

// Get a reference to the form and submit button
let form = document.getElementById('MyForm');
let submitButton = document.getElementById('submit');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the radius value from the form
    let radius = document.getElementById('radius').value;

    // Calculate the volume of the sphere
    let volume = calculateVolume(radius);

    // Display the volume in the volume field
    document.getElementById('volume').value = volume;
});