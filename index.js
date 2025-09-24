const input_val = document.querySelector("input");
const check_btn = document.querySelector("#checker-btn");
const msg = document.querySelector("#result-msg");

check_btn.addEventListener("click", function () {
    const value = input_val.value.trim().toLowerCase(); 
    if (value) {
        const fromLast = value.split("").reverse().join("");
        if (value==fromLast) {
            msg.textContent = `${value} is a Palindrome`;
        } else {
            msg.textContent = `${value} is not a Palindrome`;
        }
    } else {
        msg.textContent = "Please enter some text"
        msg.style.color="white"
    }
    
});
