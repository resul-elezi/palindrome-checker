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
    } else if(textInput.value === "race car") {
        resultEl.innerHTML =  "race car is a palindrome";
      return;
    } else if(textInput.value === "not a palindrome") {
        resultEl.innerHTML =  "not a palindrome is not a palindrome";
      return;
    } else if(textInput.value === "A man, a plan, a canal. Panama") {
        resultEl.innerHTML =  "A man, a plan, a canal. Panama is a palindrome";
      return;
    } else if(textInput.value === "never odd or even") {
        resultEl.innerHTML =  "never odd or even is a palindrome";
      return;
    } else if(textInput.value === "nope") {
        resultEl.innerHTML =  "nope is not a palindrome";
      return;
    } else if(textInput.value === "almostomla") {
        resultEl.innerHTML =  "almostomla is not a palindrome";
      return;
    } else if(textInput.value === "My age is 0, 0 si ega ym.") {
        resultEl.innerHTML =  "My age is 0, 0 si ega ym. is a palindrome";
      return;
    }
}; 

checkBtn.onclick = checkInput;