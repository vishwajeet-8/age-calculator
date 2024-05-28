const button = document.querySelector(".clickImg");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const errorDay = document.querySelector(".paraDay");
const errorMonth = document.querySelector(".paraMonth");
const errorYear = document.querySelector(".paraYear");
const displayDays = document.querySelector(".days");
const displayMonths = document.querySelector(".months");
const displayYears = document.querySelector(".years");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const para = document.querySelectorAll(".para");

button.addEventListener("click", () => {
  const presentDate = new Date();
  const oldDate = new Date(year.value, month.value, day.value);

  if (day.value == "" || month.value == "" || year.value == "") {
    para.forEach((ele) => {
      ele.innerHTML = "The field is required";
      ele.style.color = "hsl(0, 100%, 67%)";
      ele.style.fontFamily = "italic";
      ele.style.fontSize = "8px";
    });

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 100%, 67%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 100%, 67%)";
    });

    displayDays.innerHTML = "--";
    displayMonths.innerHTML = "--";
    displayYears.innerHTML = "--";
    return;
  }

  if (month.value % 2 == 0 && day.value <= 31) {
    const day = Math.abs(presentDate.getDate() - oldDate.getDate());
    displayDays.innerHTML = day;
    errorDay.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 1%, 44%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  } else if (month.value % 2 != 0 && day.value <= 30) {
    const day = Math.abs(presentDate.getDate() - oldDate.getDate());
    displayDays.innerHTML = day;
    errorDay.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 1%, 44%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  } else {
    errorDay.innerHTML = "must be a valid date";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    errorDay.style.fontFamily = "italic";
    errorDay.style.fontSize = "8px";

    errorMonth.innerHTML = "";
    errorYear.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 100%, 67%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 100%, 67%)";
    });

    return;
  }

  if (month.value < 12) {
    const month = Math.abs(presentDate.getMonth() - oldDate.getMonth());
    displayMonths.innerHTML = month + 1;
    errorMonth.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 1%, 44%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  } else if (month.value == 12) {
    const month = Math.abs(presentDate.getMonth() - (oldDate.getMonth() - 1));
    displayMonths.innerHTML = month;
    errorMonth.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 1%, 44%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  } else {
    errorMonth.innerHTML = "must be valid month";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    errorMonth.style.fontFamily = "italic";
    errorMonth.style.fontSize = "8px";

    errorDay.innerHTML = "";
    errorYear.innerHTML = "";

    displayDays.innerHTML = "--";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 100%, 67%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 100%, 67%)";
    });

    return;
  }

  if (year.value <= presentDate.getFullYear()) {
    const year = Math.abs(presentDate.getFullYear() - oldDate.getFullYear());
    displayYears.innerHTML = year;
    errorYear.innerHTML = "";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 1%, 44%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 0%, 86%)";
    });
  } else {
    errorYear.innerHTML = "must be a valid year";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    errorYear.style.fontFamily = "italic";
    errorYear.style.fontSize = "8px";

    errorDay.innerHTML = "";
    errorMonth.innerHTML = "";

    displayDays.innerHTML = "--";
    displayMonths.innerHTML = "--";

    label.forEach((ele) => {
      ele.style.color = "hsl(0, 100%, 67%)";
    });

    input.forEach((ele) => {
      ele.style.border = "1px solid hsl(0, 100%, 67%)";
    });

    return;
  }
});
