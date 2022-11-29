let counter = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let saveBtn = document.getElementById("save-btn");
let clearBtn = document.getElementById("clear-btn");
let saveEl = document.getElementById("save-el");
let count = parseInt(counter.textContent);
let initialSaveEl = saveEl.innerText;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerText = count;
  }
});

saveBtn.addEventListener("click", () => {
  if (count !== 0) {
    saveEl.textContent += count + " - ";
    counter.innerText = 0;
    count = 0;
  }
});

clearBtn.addEventListener("click", () => {
  saveEl.innerText = initialSaveEl;
});
