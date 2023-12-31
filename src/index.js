let currentElement = document.querySelector("#current");
let currentDateElement = currentElement.querySelector("#this-date");
let currentTimeElement = currentElement.querySelector("#this-day");
let currentCityElement = currentElement.querySelector("#this-city");
currentTime = moment.tz.guess();

currentDateElement.innerHTML = moment.tz(currentTime).format("MMM.D.YYYY");
currentTimeElement.innerHTML = moment.tz(currentTime).format("dddd HH:mm");
currentCityElement.innerHTML = currentTime.split("/");

function updateTime() {
  let alaskaElement = document.querySelector("#alaska");
  if (alaskaElement) {
    let alaskaDateElement = alaskaElement.querySelector(".date");
    let alaskaTimeElement = alaskaElement.querySelector(".time");
    alaskaTime = moment().tz("US/Alaska");
    alaskaDateElement.innerHTML = alaskaTime.format("MMMM Do YYYY");
    alaskaTimeElement.innerHTML = alaskaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  singaporeTime = moment().tz("Asia/Singapore");
  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  osloTime = moment().tz("Europe/Oslo");
  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");

  let fijiElement = document.querySelector("#fiji");
  let fijiDateElement = fijiElement.querySelector(".date");
  let fijiTimeElement = fijiElement.querySelector(".time");
  fijiTime = moment().tz("Pacific/Fiji");
  fijiDateElement.innerHTML = fijiTime.format("MMMM Do YYYY");
  fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function selectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/");
  let cityTime = moment().tz(cityTimeZone);
  let firstElement = document.querySelector("#first-city");
  firstElement.innerHTML = `
            <div class="city" >
              <div>
                <h3>${cityName}</h3>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
              <div class="time">${cityTime.format(
                "h:mm:ss"
              )} <small>${cityTime.format("A")}</small></div>
            </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let firstElement = document.querySelector("#city");
firstElement.addEventListener("change", selectedCity);
