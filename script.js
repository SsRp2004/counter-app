//Step 1: Select al the elements (number box and buttons)
let count = 0;    //to track the value

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const restBtn = document.getElementById("reset");

//Step2: Add event listeners to buttons
increaseBtn.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    counter.textContent = count;
});

restBtn.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
    console.log("Reset clicked");
});
