function getRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert the decimal values to hexadecimal (base 16)
    const redHex = red.toString(16).padStart(2, '0'); // Ensure at least 2 digits
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // Combine the hexadecimal values to create the color in #RRGGBB format
    const color = `#${redHex}${greenHex}${blueHex}`;

    return color;
}


// Assuming window.Telegram.WebApp.headerColor contains the current color in #RRGGBB format
var currentHeaderColor = window.Telegram.WebApp.headerColor;

// Update the content of the span element
document.getElementById("headerColorDisplay").textContent = "Current Header Color: " + currentHeaderColor;
