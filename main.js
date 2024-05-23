//Import Json file
import { palettesJson } from './package.json';


// Function to create a palette element
const paletteElement = document.createElement('div');

// Create color divs
const colorDiv = document.createElement('div');

// Create copy buttons
const copyButton = document.createElement('button');

// Create delete button
const deleteButton = document.createElement('button');

// Create temperature banner
const temperatureBanner = document.createElement('div');

// Append palette to palettes section
const palettesSection = document.getElementById('palettes');

// Get form inputs
const title = document.getElementById('paletteTitle').value;
const color1 = document.getElementById('color1').value;
const color2 = document.getElementById('color2').value;
const color3 = document.getElementById('color3').value;
const temperature = document.querySelector('input[name="temperature"]:checked').id;



// Create palette
const colors = [color1, color2, color3];
