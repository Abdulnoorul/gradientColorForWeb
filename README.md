Gradient Background Generator

Overview

This is a simple static website that allows users to generate and view a linear gradient background. The gradient is dynamically updated using JavaScript, and users can modify the colors by clicking buttons. The generated gradient values can also be copied to the clipboard with a single click.

Features

Generates a linear-gradient background dynamically.

Allows users to change the first gradient color by clicking the Right button.

Allows users to change the second gradient color by clicking the Left button.

Each button changes its own background color to match the selected gradient color.

Displays the current gradient color values in an output box.

Allows users to copy the gradient values to the clipboard with a single click.

Shows an alert when the gradient values are successfully copied.

Technologies Used

HTML (Structure of the webpage)

CSS (Basic styling)

JavaScript (Functionality for color changes and interactions)

Usage

Open the index.html file in any modern web browser.

Click the Right and Left buttons to change the gradient colors.

Click on the displayed gradient values to copy them to the clipboard.

File Structure

|-- index.html     # Main HTML file
|-- index.css      # CSS file for styling
|-- index.js       # JavaScript file for functionality
|-- icon.png       # Favicon (optional)
|-- README.md      # Project documentation

JavaScript Functionality Breakdown

updateBackground() → Updates the gradient background and displays the RGB values.

rght() → Generates a new random color for the first gradient color and updates the Right button's background.

lft() → Generates a new random color for the second gradient color and updates the Left button's background.

copyGradient() → Copies the gradient values to the clipboard and shows an alert.
