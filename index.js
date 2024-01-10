const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    // gives an alarm when user submits an empty line
    if (textInput.value === "") {
    alert("Please input a value");
    } else {
        isPalidrome();
    }
})


// checks whether given word is a palidrome
function isPalidrome(val) {
    const textValue = textInput.value;
    let valueArray = [];
    let reverseValueArray = [];
    const specialChars = ['(', ')', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', " ", '-', '+', '=', '|', '\\', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '_'];
    for (var i = 0; i < textValue.length; i++) {
        if (!specialChars.includes(textValue.charAt(i))) {
            valueArray.push(textValue.charAt(i));
        }
    }
    reverseValueArray = valueArray.slice().reverse();
    
    let optionOne = valueArray.join("").toLowerCase();
    let optionTwo = reverseValueArray.join("").toLowerCase();

    if (optionOne !== optionTwo) {
        result.innerText = `${textValue} is not a palindrome.`;
    } 
    else if (optionOne === optionTwo) {
        result.innerText = `${textValue} is a palindrome.`;
    }
}