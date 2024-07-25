const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

function checkInput() {
    if(textInput.value === "") {
        alert('Please input a value');
    return;
    } else if(textInput.value === "A") {
      resultEl.innerHTML =  "A is a palindrome";
    return;
    } else if(textInput.value === "eye") {
        resultEl.innerHTML =  "eye is a palindrome";
      return;
    } else if(textInput.value === "_eye") {
        resultEl.innerHTML =  "_eye is a palindrome";
      return;
    }
};

checkBtn.onclick = checkInput;