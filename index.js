"use strict";

const monthEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");

const now = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDate() {
  monthEl.textContent = monthNames[now.getMonth()];
  //or u can use now.toLocalString("en", {month:"long"})
  dayNameEl.textContent = weekDays[now.getDay()];
  dayEl.textContent = now.getDate();
  yearEl.textContent = now.getFullYear();
}

updateDate();
