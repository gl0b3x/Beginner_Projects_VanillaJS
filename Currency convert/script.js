  const reverseButt = document.getElementById("reverseCrnc"); // подключаем реверс кнопку
const from_currency = document.getElementById("from_currency"); //селектор с какой валюты
const to_currency = document.getElementById("to_currency"); // селектор в какую валюту
const userGet = document.getElementById("userGet"); // человек получает
const user_amount = document.getElementById("userValue"); // человек вводит
const current_Course = document.getElementById("currentCrnc"); // текущий курс
const errorNum = document.getElementById("errorNum"); // ошибка

const popUsd = document.getElementById("popularUsd"); // популярные валюты
const popEur = document.getElementById("popularEur");
const popPln = document.getElementById("popularPln");
const popUah = document.getElementById("popularUah");
const popGbp = document.getElementById("popularGbp");

let percentOf = 0;

document.getElementById("i").addEventListener("click", () => {
  alert(
    "Выберите нужный Вам %: 2% - комиссия банкоматов. 3% - комиссия кредитных карт. 5% - терминалы самообслуживания"
  );
}); // алерт при нажатии на кнопку І

reverseButt.addEventListener("click", () => {
  [to_currency.value, from_currency.value] = [
    from_currency.value,
    to_currency.value,
  ];
  [user_amount.value, userGet.value] = [userGet.value, user_amount.value];
  convert();
}); // меняем местами валюты при нажатии на кнопку реверс

user_amount.addEventListener("input", () => {
  checkError();
}); // проверка для ошибки

user_amount.addEventListener("wheel", (e) => {
  e.preventDefault();
  let change;
  if (user_amount.value > 0) {
    change = e.deltaY > 0 ? -1 : 1;
  } else {
    change = e.deltaY >= 0 ? false : 1;
  }
  const currentValue = +user_amount.value;
  const step = 1;
  user_amount.value = change * step + currentValue;
  checkError();
  convert();
}); // возможность крутить колесиком на инпуте

to_currency.addEventListener("input", () => convert()); // конвертация при смене валюты

from_currency.addEventListener("input", () => convert()); // конвертация при смене валюты

function convert() {
  checkValues();
  const from_currency_value = from_currency.value;
  const to_currency_value = to_currency.value;
  let valueWithPercent;
  fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`, {cache : 'no-store'})
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[to_currency_value];
      to_amount = user_amount.value * rate;
      to_amount = to_amount - to_amount * (percentOf / 100);
      if (!Number.isInteger(to_amount)) {
        to_amount = to_amount.toFixed(2);
      }
      userGet.value = to_amount;
      valueWithPercent = rate - rate * (percentOf / 100);
      current_Course.innerText = `Текущий курc: 1 ${from_currency_value} = ${valueWithPercent} ${to_currency_value}`;
      document.title = `1 ${from_currency_value} = ${valueWithPercent} ${to_currency_value}`;
    })
      .catch((err) => {
        current_Course.innerText = "Ошибка при загрузке данных"
        current_Course.style.color = "red";
        document.title = "Ошибка при загрузке данных";
      });
} // сама функция конвертации с апи

function percent(buttonName) {
  cukl();
  let b = buttonName;
  document.getElementById(b).classList.add("active");
  switch (buttonName) {
    case "percent0":
      percentOf = 0;
      convert();
      break;
    case "percent2":
      percentOf = 2;
      convert();
      break;
    case "percent3":
      percentOf = 3;
      convert();
      break;
    case "percent4":
      percentOf = 4;
      convert();
      break;
    case "percent5":
      percentOf = 5;
      convert();
      break;
  }
} // изменяем % при нажатии на %

function cukl() {
  for (let i = 0; i < 6; i++) {
    if (i == 1) {
    } else {
      let b = "percent" + String(i);
      document.getElementById(b).classList.remove("active");
    }
  }
} // цикл удаления класса актив с процентых кнопок(что бы они перестали быть зеленными)

function popularValue(buttonName) {
  let b = buttonName;
  document.getElementById(b).classList.add("popularActive");
  switch (buttonName) {
    case "popularUsd":
      from_currency.value = "USD";
      usd();
      convert();
      break;
    case "popularEur":
      from_currency.value = "EUR";
      eur();
      convert();
      break;
    case "popularGbp":
      from_currency.value = "GBP";
      gbp();
      convert();
      break;
    case "popularPln":
      from_currency.value = "PLN";
      pln();
      convert();
      break;
    case "popularUah":
      from_currency.value = "UAH";
      uah();
      convert();
      break;
  }
} // добавляем класс актив и конвертацию при нажатии на популярные валюты

function checkValues() {
  switch (from_currency.value) {
    case "UAH":
      uah();
      break;
    case "USD":
      usd();
      break;
    case "GBP":
      gbp();
      break;
    case "EUR":
      eur();
      break;
    case "PLN":
      pln();
      break;
    default:
      popEur.classList.remove("popularActive");
      popGbp.classList.remove("popularActive");
      popPln.classList.remove("popularActive");
      popUsd.classList.remove("popularActive");
      popUah.classList.remove("popularActive");
  }
} // делаем валюту активну, если она выбрана в селекторе

function uah() {
  popEur.classList.remove("popularActive");
  popGbp.classList.remove("popularActive");
  popPln.classList.remove("popularActive");
  popUsd.classList.remove("popularActive");
  popUah.classList.add("popularActive");
}

function usd() {
  popEur.classList.remove("popularActive");
  popGbp.classList.remove("popularActive");
  popPln.classList.remove("popularActive");
  popUah.classList.remove("popularActive");
  popUsd.classList.add("popularActive");
}

function pln() {
  popEur.classList.remove("popularActive");
  popGbp.classList.remove("popularActive");
  popUah.classList.remove("popularActive");
  popUsd.classList.remove("popularActive");
  popPln.classList.add("popularActive");
}

function gbp() {
  popEur.classList.remove("popularActive");
  popUah.classList.remove("popularActive");
  popPln.classList.remove("popularActive");
  popUsd.classList.remove("popularActive");
  popGbp.classList.add("popularActive");
}

function eur() {
  popGbp.classList.remove("popularActive");
  popUah.classList.remove("popularActive");
  popPln.classList.remove("popularActive");
  popUsd.classList.remove("popularActive");
  popEur.classList.add("popularActive");
}

function checkError() {
  if (user_amount.value >= 0.01) {
    errorNum.classList.remove("hidden");
    errorNum.style.opacity = "0";
    convert();
  } else {
    userGet.value = 0;
    errorNum.style.opacity = "1";
    errorNum.classList.add("hidden");
  }
}

window.onload = () => convert();
