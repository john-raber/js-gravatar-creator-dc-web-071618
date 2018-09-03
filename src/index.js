function handleSubmit(e) {
  e.preventDefault();

  const formText = e.target.querySelector('input').value;
  const convertedText = md5.array(formText);
  const rgbValues = convertedText.slice(-3);
  const color = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

  removeColor();

  if (convertedText[0] % 2 === 0) {
    addColor(document.getElementById('0-0'), color);
    addColor(document.getElementById('0-4'), color);
  }

  if (convertedText[1] % 2 === 0) {
    addColor(document.getElementById('0-1'), color);
    addColor(document.getElementById('0-3'), color);
  }

  if (convertedText[2] % 2 === 0) {
    addColor(document.getElementById('0-2'), color);
  }

  if (convertedText[3] % 2 === 0) {
    addColor(document.getElementById('1-0'), color);
    addColor(document.getElementById('1-4'), color);
  }

  if (convertedText[4] % 2 === 0) {
    addColor(document.getElementById('1-1'), color);
    addColor(document.getElementById('1-3'), color);
  }

  if (convertedText[5] % 2 === 0) {
    addColor(document.getElementById('1-2'), color);
  }

  if (convertedText[6] % 2 === 0) {
    addColor(document.getElementById('2-0'), color);
    addColor(document.getElementById('2-4'), color);
  }

  if (convertedText[7] % 2 === 0) {
    addColor(document.getElementById('2-1'), color);
    addColor(document.getElementById('2-3'), color);
  }

  if (convertedText[8] % 2 === 0) {
    addColor(document.getElementById('2-2'), color);
  }

  if (convertedText[9] % 2 === 0) {
    addColor(document.getElementById('3-0'), color);
    addColor(document.getElementById('3-4'), color);
  }

  if (convertedText[10] % 2 === 0) {
    addColor(document.getElementById('3-1'), color);
    addColor(document.getElementById('3-3'), color);
  }

  if (convertedText[11] % 2 === 0) {
    addColor(document.getElementById('3-2'), color);
  }

  if (convertedText[12] % 2 === 0) {
    addColor(document.getElementById('4-0'), color);
    addColor(document.getElementById('4-4'), color);
  }

  if (convertedText[13] % 2 === 0) {
    addColor(document.getElementById('4-1'), color);
    addColor(document.getElementById('4-3'), color);
  }

  if (convertedText[14] % 2 === 0) {
    addColor(document.getElementById('4-2'), color);
  }

  e.target.reset();
}

function addColor(node, color) {
  node.style.backgroundColor = color;
}

function removeColor() {
  const squares = document.querySelectorAll('span');

  squares.forEach(s => {
    if (s.style.backgroundColor) {
      s.style.removeProperty('background-color');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
