function convertTemperature() {

    let value = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    document.getElementById("celsius").innerHTML = "";
    document.getElementById("fahrenheit").innerHTML = "";
    document.getElementById("kelvin").innerHTML = "";
    error.innerHTML = "";

    if (value === "" || isNaN(value)) {
        error.innerHTML = "Please enter a valid numeric value.";
        return;
    }

    value = Number(value);

    if ((unit === "C" && value < -273.15) ||
        (unit === "F" && value < -459.67) ||
        (unit === "K" && value < 0)) {

        error.innerHTML = "Temperature cannot be below absolute zero.";
        return;
    }

    let c, f, k;

    if (unit === "C") {
        c = value;
        f = (value * 9 / 5) + 32;
        k = value + 273.15;
    }

    else if (unit === "F") {
        c = (value - 32) * 5 / 9;
        f = value;
        k = c + 273.15;
    }

    else {
        c = value - 273.15;
        f = (c * 9 / 5) + 32;
        k = value;
    }



    document.getElementById("celsius").innerHTML =
        "Celsius : " + c.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
        "Fahrenheit : " + f.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
        "Kelvin : " + k.toFixed(2) + " K";

        document.getElementById("resultBox").style.display = "block";
    }

// Reset function 
function resetForm(){
     
document.getElementById("tempInput").value ="";

document.getElementById("unit").selectedIndex = 0;

document.getElementById("celsius").innerHTML = "";

document.getElementById("fahrenheit").innerHTML = "";

document.getElementById("kelvin").innerHTML = "";

document.getElementById("error").innerHTML = "";

document.getElementById("resultBox").style.display="none";
}