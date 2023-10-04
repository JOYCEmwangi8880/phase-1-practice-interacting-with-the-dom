//  HTML elements
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");
const heart = document.getElementById("heart");
const likesDes = document.querySelector(".likes");
const pause = document.getElementById("pause");

// Event listeners for button clicks
plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);
heart.addEventListener("click", likeFn);
pause.addEventListener("click", pauseFn);

// Function to increment the counter
function increment() {
    counter.textContent++;
}

// Function to decrement the counter
function decrement() {
    counter.textContent--;
}

// Function to add a like
function likeFn() {
    // Create a new list item to display likes
    let li = document.createElement("li");
    li.textContent = `${counter.textContent} has been liked ${1} time.`;
    likesDes.appendChild(li);
}

// Function to pause or resume the counter
let ticking = true;
function pauseFn() {
    if (ticking) {
        clearInterval(interval);
        this.textContent = "resume";
        ticking = false;
    } else {
        this.textContent = "pause";
        ticking = true;
        incrementCounter();
    }
}

// Function to increment the counter every second
let seconds = 0;
let incrementSeconds = () => {
    seconds += 1;
    counter.textContent = seconds;
};
let interval;
function incrementCounter() {
    interval = setInterval(incrementSeconds, 1000);
}
incrementCounter();
