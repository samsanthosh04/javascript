// Function to append numbers or operators to the input field
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Function to clear the input field
function clearResult() {
    document.getElementById('result').value = '';
}

// Function to calculate the result
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
