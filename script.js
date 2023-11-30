const display = document.getElementById('display');
  const alertBox = document.getElementById('alertBox');

  function appendToDisplay(value) {
    if (!isNaN(value) || value === '.') {
      display.value += value;
    } else {
      alertBox.style.display = 'block';
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 2000);
    }
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  // Handle keyboard events
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (['+', '-', '*', '/'].includes(key)) {
      appendToDisplay(key);
    } else {
      alertBox.style.display = 'block';
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 2000);
    }
  });