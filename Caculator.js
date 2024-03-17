var display = document.getElementById("total");
function dependOnclIck(input) {
    display.value += input;
};
function cacuLate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
    
}