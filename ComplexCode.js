/* Filename: ComplexCode.js */

// Description: This code generates a complex and elaborate ASCII art of a Tiger using JavaScript.

// Function to generate the ASCII art of a Tiger
function generateTigerArt() {
  let tigerArt = "";

  // Rows 1-3
  tigerArt += "         \\/ \r\n";
  tigerArt += "        (\\_/) \r\n";
  tigerArt += "  _  /    = =  \\     _ \r\n";

  // Rows 4-5
  tigerArt += " / \\/         \\ / \\_/ \\ \r\n";
  tigerArt += "/               \\  \\_/ \\ \r\n";

  // Rows 6-8
  tigerArt += "|                   || \r\n";
  tigerArt += "|                   || \r\n";
  tigerArt += "\\ _ _ _ _ _ _ _ _ _ _ _\\ \r\n";

  // Rows 9-13
  tigerArt += " \\                     / \r\n";
  tigerArt += "   \\ _ _ _ _ _ _ _ _ _ /  \r\n";
  tigerArt += "       || || || || || \r\n";
  tigerArt += "       || || || || || \r\n";
  tigerArt += "      =='=='=='=='== \r\n";

  // Rows 14-15
  tigerArt += "\r\n";
  tigerArt += " Name: Tony the Tiger \r\n";

  return tigerArt;
}

// Generate the Tiger ASCII art
let tigerAsciiArt = generateTigerArt();

// Display the Tiger ASCII art
console.log(tigerAsciiArt);
