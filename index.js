// Default gradient colors (initial values)
let clr1 = "rgb(255, 0, 0)"; // First color (Red)
let clr2 = "rgb(0, 0, 255)"; // Second color (Blue)

// Function to update the body's background gradient
function updateBackground() {
    let element = document.querySelector("#grade"); // Selects the body element
    let disclr = document.getElementById("display"); // Selects the output element

    // Sets the background gradient with the selected colors
    element.style.backgroundImage = `linear-gradient(to right, ${clr1}, ${clr2})`;

    // Updates the text content to display the current gradient colors
    disclr.textContent = `Gradient values are: ${clr1}, ${clr2}`;
}

// Function to change the first color (Right button click)
function rght() {
    // Generate random RGB values
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    
    clr1 = `rgb(${r}, ${g}, ${b})`; // Update the first gradient color

    // Change the background color of the "Right" button to match the new color
    document.querySelector("#right").style.backgroundColor = clr1;

    // Update the gradient background with the new color
    updateBackground();
}

// Function to change the second color (Left button click)
function lft() {
    // Generate random RGB values
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);
    
    clr2 = `rgb(${r}, ${g}, ${b})`; // Update the second gradient color

    // Change the background color of the "Left" button to match the new color
    document.querySelector("#left").style.backgroundColor = clr2;

    // Update the gradient background with the new color
    updateBackground();
}

// Function to copy the gradient color values to the clipboard
function copyGradient() {
    let disclr = document.getElementById("display").textContent; // Get the displayed gradient values
    
    // Copy text to the clipboard
    navigator.clipboard.writeText(disclr).then(() => {
        alert("Copied to clipboard: " + disclr); // Show an alert when successfully copied
    }).catch(err => {
        console.error("Failed to copy: ", err); // Log an error if copying fails
    });
}

// Attach event listeners to buttons
document.querySelector("#right").addEventListener("click", rght); // Calls rght() when the right button is clicked
document.querySelector("#left").addEventListener("click", lft); // Calls lft() when the left button is clicked
document.querySelector("#display").addEventListener("click", copyGradient); // Calls copyGradient() when the display text is clicked

// Initialize the background with default colors on page load
updateBackground();
