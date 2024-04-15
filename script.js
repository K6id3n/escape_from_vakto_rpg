loadSprite("background", "path/to/your/background/image.png");

// Create the background
const background = add([
  sprite("background"), // Use the loaded background image
  layer("background"), // Put the background at the bottom layer
  pos(0, 0), // Position the background at the top-left corner of the screen
  scale(width() / sprite("background").width, height() / sprite("background").height), // Scale the background to cover the entire canvas
]);