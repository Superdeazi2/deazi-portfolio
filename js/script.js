const frames = [];
for (let i = 1; i <= 5; i++)
  frames.push(document.getElementById(`loading${i}`));

let current = 0;
let cycles = 0;
const totalCycles = 1;
const interval = 120;

function showFrame(i) {
  frames.forEach((f, idx) => f.classList.toggle("hidden", idx !== i));
}

showFrame(current);

const timer = setInterval(() => {
  current++;
  if (current >= frames.length) {
    current = 0;
    cycles++;
    if (cycles === totalCycles) {
      frames.forEach((f) => f.classList.add("hidden"));
      clearInterval(timer);
      return;
    }
  }
  showFrame(current);
}, interval);
