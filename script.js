function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.innerHTML = "❗ Please enter a valid number.";
    resultDiv.style.color = "red";
    return;
  }

  let c, f, k;

  if (unit === "C") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  } else if (unit === "F") {
    f = temp;
    c = (temp - 32) * 5/9;
    k = c + 273.15;
  } else if (unit === "K") {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  resultDiv.style.color = "#222";
  resultDiv.innerHTML = `
    <p>🌡️ Celsius: <strong>${c.toFixed(2)} °C</strong></p>
    <p>🔥 Fahrenheit: <strong>${f.toFixed(2)} °F</strong></p>
    <p>❄️ Kelvin: <strong>${k.toFixed(2)} K</strong></p>
  `;
}
