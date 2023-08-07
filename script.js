const toggleSwitch = document.getElementById("toggle-switch");
const light = document.getElementById("light");
const indicator = document.querySelector(".indicator");

toggleSwitch.addEventListener("change", function() {
    if (toggleSwitch.checked) {
        light.style.backgroundColor = "green";
        indicator.style.backgroundColor = "green";
    } else {
        light.style.backgroundColor = "red";
        indicator.style.backgroundColor = "#ff5252";
    }
});
