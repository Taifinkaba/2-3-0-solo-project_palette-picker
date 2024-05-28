// JS file
fetch('package.json')
  .then(response => response.json())
  .then(data => {
    const palettesJson = data;

    const palettesSection = document.getElementById('palettes');

    palettesJson.forEach(palette => {
      const paletteItem = document.createElement('li');

      palette.colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.width = '30px';
        colorDiv.style.height = '30px';
        colorDiv.style.marginRight = '5px';
        colorDiv.style.border = '1px solid black';
        colorDiv.style.position = 'relative';

        const whiteText = document.createElement('span');
        whiteText.textContent = 'White Text';
        whiteText.style.color = 'white';
        whiteText.style.position = 'absolute';
        whiteText.style.top = '5px';
        whiteText.style.left = '5px';
        colorDiv.appendChild(whiteText);

        const blackText = document.createElement('span');
        blackText.textContent = 'Black Text';
        blackText.style.color = 'black';
        blackText.style.position = 'absolute';
        blackText.style.bottom = '5px';
        blackText.style.right = '5px';
        colorDiv.appendChild(blackText);

        paletteItem.appendChild(colorDiv);
      });

      paletteItem.textContent = palette.name;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style.position = 'absolute';
      deleteButton.style.bottom = '5px';
      deleteButton.style.left = '5px';
      paletteItem.appendChild(deleteButton);

      const temperatureBanner = document.createElement('div');
      temperatureBanner.textContent = palette.temperature;
      temperatureBanner.style.backgroundColor = palette.temperatureColor;
      temperatureBanner.style.position = 'absolute';
      temperatureBanner.style.bottom = '0';
      temperatureBanner.style.left = '0';
      temperatureBanner.style.width = '100%';
      temperatureBanner.style.textAlign = 'center';
      paletteItem.appendChild(temperatureBanner);

      palettesSection.appendChild(paletteItem);
    });

    palettesSection.style.display = 'grid';
    palettesSection.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    palettesSection.style.gap = '20px';
  });