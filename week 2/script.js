let displayValue = '';

function append(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

