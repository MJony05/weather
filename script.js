let input = document.querySelector(".user__input");
let btn = document.querySelector(".search__btn");
let data = 0;
let city = 0;
fetch("https://ipinfo.io/195.158.18.236?token=fdbc2ae3a50ac5")
  .then((res) => res.json())
  .then((res) => {
    weather(res.region);
    input.placeholder = res.region;
  });
function weather(city) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${city}&aqi=no`
  ).then((response) =>
    response.json().then((res) => {
      document.querySelector(".city__name").textContent = res.location.name;
      document.querySelector(".city__time").textContent =
        res.location.localtime;
      document.querySelector(".gradus").textContent = res.current.temp_c;
      document.querySelector(".weather__type").textContent =
        res.current.condition.text;
      document.querySelector(
        ".weather__type"
      ).src = `${res.current.condition.icon}`;
      document.querySelector(".cloudly").textContent = res.current.cloud + "%";
      document.querySelector(".humidity").textContent = res.current.humidity;
      document.querySelector(".wind").textContent =
        res.current.wind_kph + "km/h";
    })
  );
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let a = input.value;
  weather(a);
});
