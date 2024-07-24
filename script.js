const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

function checkInput() {
    if(textInput.value === "") {
        alert('Please input a value');
    return;
    }
};

checkBtn.onclick = checkInput;