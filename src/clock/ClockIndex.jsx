import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { PageContext } from "../Context";

function ClockIndex() {
  const { theme } = useContext(PageContext);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Oct",
    "Seb",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [Today, setToday] = useState();
  const [Month, setMonth] = useState();
  const [MonthName, setMonthName] = useState();
  const [Year, setYear] = useState();
  const [Hour, setHour] = useState();
  const [Minute, setMinute] = useState();
  const [Second, setSecond] = useState();
  const [Mili, setMili] = useState();

  const [period, setPeriod] = useState();

  function DisplayClock() {
    let date = new Date();

    let today = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let hour = date.getHours();
    let minute = date.getMinutes().toString().padStart(2, 0);
    let second = date.getSeconds().toString().padStart(2, 0);
    let mili = date.getMilliseconds();

    // let seconds = date.getSeconds();

    if (hour >= 12) {
      setPeriod("PM");
    } else {
      setPeriod("AM");
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    setToday(days[today]);
    setMonthName(months[month]);
    setMonth(month);
    setYear(year);

    setHour(hour.toString().padStart(2, 0));
    setMinute(minute);
    setSecond(second);
    setMili(mili);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      DisplayClock();
    }, 1);
  }, []);

  return (
    <div>
      <main>
        <p className=" date-display text-center">
          {Today}, {MonthName} {Month} {Year}
        </p>
        <section className=" clock-display ">
          <span className=" hour-span">{Hour}</span>

          <span className=" divider">:</span>

          <span className=" minute-span">{Minute}</span>

          <span className=" divider">:</span>

          <span className=" second-span">{Second}</span>

          <span className=" ml-2" style={{ fontSize: "1.2em" }}>
            {period}
          </span>

          {/* <span className=" mili-span min-w-[30px] text-[10px] text-center">
            {Mili}
          </span> */}
        </section>
      </main>
    </div>
  );
}

export default ClockIndex;
