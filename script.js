const num = document.querySelector('.num');
const speed = document.querySelector('.speed');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const min = document.querySelector('#min');
const hour = document.querySelector('#hour');

btn.addEventListener('click', () => {
  let total;

  if (min.checked == true) {
    result.innerHTML = Math.floor(num.value - (num.value / speed.value)) + ' ' + 'сэкономил минут';
  } else {
    total = num.value * 60;
    result.innerHTML = Math.floor(total - (total / speed.value)) + ' ' + 'сэкономил минут';
  }
});

