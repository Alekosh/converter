const num = document.querySelector('.num');
const speed = document.querySelector('.speed');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  result.innerHTML = num.value * 60 / speed.value + ' ' + "сэкономил минут";
});

