const colorInput = document.getElementById('color');
const hexValue = document.getElementById('hex-value');
const rgbValue = document.getElementById('rgb-value');

colorInput.addEventListener('input', updateColorValues);

function updateColorValues() {
    const selectedColor = colorInput.value;
    hexValue.textContent = selectedColor;

    // Convert HEX to RGB
    const hex = selectedColor.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
}

// Initial update
updateColorValues();
