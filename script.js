function changeColors() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Apply the random color to the background
    portfolio2.body.style.backgroundColor = randomColor;

    // Change text color based on background brightness
    var brightness = calculateBrightness(randomColor);
    portfolio2.body.style.color = brightness > 128 ? "black" : "white";
}

function calculateBrightness(color) {
    // Convert hex color to RGB
    var hex = color.substring(1); // remove #
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);
    // Calculate brightness (standard formula)
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness;
}