const counter = document.getElementById("counter");
const incrementbtn = document.getElementById("Increase");
const decrementbtn = document.getElementById("Decrease");
const resetbtn = document.getElementById("Reset");

let count = 0;

incrementbtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
    console.log(count)
});

decrementbtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counter.innerHTML = count;
    }
});

resetbtn.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});