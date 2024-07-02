// Function to convert degrees Centigrade to Fahrenheit
function convertTemperature() {
    // Get the value from the input field
    let degCent = document.getElementById('centigrade').value;

    // Calculate degrees Fahrenheit
    let degFahren = (9 / 5) * degCent + 32;

    // Display the result in a descriptive sentence
    document.getElementById('result').innerText = `${degCent} degrees Centigrade is equal to ${degFahren} degrees Fahrenheit.`;
}
