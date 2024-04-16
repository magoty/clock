const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");
const numHour = document.querySelector(".hours");
const numMin = document.querySelector(".minutes");

let i = 360;

function clock() {
  let time = new Date(); // new создает экземпляр класса Date - это работа с веременем и датой

  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  if (seconds == 0 || i > 360) {
    sec.style.transform = `rotate(${i}deg)`;
    i += 6;
  } else {
    sec.style.transform = `rotate(${seconds}deg)`;
  }

  sec.style.transition = `1s linear`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  numMin.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  numHour.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  setTimeout(() => {
    // рекурсия - функция, которая вызывает сама себя
    clock();
  }, 1000);
}

clock();

const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContentItem = document.querySelectorAll(".tabsContentItem");

tabsItem.forEach((el, i) => {
  el.addEventListener("click", () => {
    tabsItem.forEach((item, idx) => {
      item.classList.remove("active");
      tabsContentItem[idx].classList.remove("active");
    });

    el.classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
});

const stopwatchSeconds = document.querySelector(".stopwatch__seconds");
const stopwatchMinutes = document.querySelector(".stopwatch__minutes");
const stopwatchHours = document.querySelector(".stopwatch__hours");
const stopwatchBtn = document.querySelector(".stopwatch__btn");
const activeSpan = document.querySelector('.tabsLink__span');

let interval;
let second = 0;
let minute = 0;
let houre = 0;

stopwatchBtn.addEventListener('click', function(){
  if (stopwatchBtn.innerHTML === 'start') {
    stopwatchBtn.innerHTML = 'stop'
    activeSpan.classList.add('active')
  }
  else if(stopwatchBtn.innerHTML === 'stop'){
    stopwatchBtn.innerHTML = 'clear'
    activeSpan.classList.add('active_clear')
    second = 0
    interval = setInterval(startTimer(), 0);
    
  }
  else{
    stopwatchBtn.innerHTML = 'start'
    activeSpan.classList.remove('active_clear', 'active')
    stopwatchSeconds.innerHTML = stopwatchMinutes.innerHTML = stopwatchHours.innerHTML = 0
  }
})

const startTimer = () => {
  if(stopwatchBtn.innerHTML === 'stop'){
    if (second >= 59) {
      second = 0;
      stopwatchSeconds.innerHTML = second;
      stopwatchMinutes.innerHTML++;
      if (minute >= 59) {
        minute = 0;
        stopwatchMinutes.innerHTML = minute;
        stopwatchHours.innerHTML++;
  
        if (houre >= 99) {
          houre = 0
          stopwatchHours.innerHTML = 0
          stopwatchSeconds.innerHTML = 0;
          stopwatchMinutes.innerHTML = 0;
        }
        else{
          houre++
        }
      } else {
        minute++;
      }
    } else {
      stopwatchSeconds.innerHTML = second;
      second++;
    }
  }
 
};

stopwatchBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 100);
});
