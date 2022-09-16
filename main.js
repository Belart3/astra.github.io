var dailyBtn = document.querySelector("#daily");
var weeklyBtn = document.querySelector("#weekly");
var monthlyBtn = document.querySelector("#monthly");
var time1 = document.querySelector("#time-1");
var prevtime1 = document.querySelector("#prev-time-1");
var time2 = document.querySelector("#time-2");
var prevtime2 = document.querySelector("#prev-time-2");
var time3 = document.querySelector("#time-3");
var prevtime3 = document.querySelector("#prev-time-3");
var time4 = document.querySelector("#time-4");
var prevtime4 = document.querySelector("#prev-time-4");
var time5 = document.querySelector("#time-5");
var prevtime5 = document.querySelector("#prev-time-5");
var time6 = document.querySelector("#time-6");
var prevtime6 = document.querySelector("#prev-time-6");

dailyBtn.addEventListener("click", function(){
    dailyBtn.style.color = "white";

    time1.textContent = "5Hrs";
    prevtime1.textContent = "7Hrs";

    time2.textContent = "1Hrs";
    prevtime2.textContent = "2Hrs";

    time3.textContent = "0Hrs";
    prevtime3.textContent = "1Hrs";

    time4.textContent = "1Hrs";
    prevtime4.textContent = "1Hrs";

    time5.textContent = "1Hrs";
    prevtime5.textContent = "3Hrs";

    time6.textContent = "0Hrs";
    prevtime6.textContent = "1Hrs";
});
weeklyBtn.addEventListener("click", function(){
    weeklyBtn.style.color = "white";

    time1.textContent = "32Hrs";
    prevtime1.textContent = "36Hrs";

    time2.textContent = "10Hrs";
    prevtime2.textContent = "8Hrs";

    time3.textContent = "4Hrs";
    prevtime3.textContent = "7Hrs";

    time4.textContent = "4Hrs";
    prevtime4.textContent = "5Hrs";

    time5.textContent = "5Hrs";
    prevtime5.textContent = "10Hrs";

    time6.textContent = "2Hrs";
    prevtime6.textContent = "2Hrs";
});
monthlyBtn.addEventListener("click", function(){
    monthlyBtn.style.color = "white";

    time1.textContent = "103Hrs";
    prevtime1.textContent = "128Hrs";

    time2.textContent = "23Hrs";
    prevtime2.textContent = "29Hrs";

    time3.textContent = "13Hrs";
    prevtime3.textContent = "19Hrs";

    time4.textContent = "11Hrs";
    prevtime4.textContent = "18Hrs";

    time5.textContent = "21Hrs";
    prevtime5.textContent = "23Hrs";

    time6.textContent = "7Hrs";
    prevtime6.textContent = "11Hrs";
});
