const num = document.querySelector('.num');
const speed = document.querySelector('.speed');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const min = document.querySelector('#min');
const hour = document.querySelector('#hour');
const test = document.querySelector('.test');
const span = document.querySelector('span')

btn.addEventListener('click', () => {
  let total;
  if (min.checked == true) {
    result.innerHTML = Math.floor(num.value - (num.value / speed.value)) + ' ' + `минут сэкономлено из ${num.value} минут`;
  } else {
    total = num.value * 60;
    result.innerHTML = Math.floor(total - (total / speed.value)) + ' ' + `минут сэкономлено из ${num.value * 60} минут`;
  }
});

// num.addEventListener('blur', () => {
//   test.innerHTML = `${num.value} минут делим на  х${speed.value}`;
// })

hour.addEventListener('click', () => {
  span.innerHTML = 'часы';
  num.placeholder = ' к примеру 1 час'
})
min.addEventListener('click', () => {
  span.innerHTML = 'минуты';
  num.placeholder = ' к пример 20 мин'
})

