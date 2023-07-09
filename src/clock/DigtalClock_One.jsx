import React, { useEffect, useState } from "react";

function DigtalClock_One() {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

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

  const clockDisplay = () => {
    let d = new Date();

    let today = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();

    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour > 12) {
      hour = hour - 12;
    }

    setDate(`${days[today]}, ${months[month]} ${day} ${year} `);
    setTime(
      `${hour.toString().padStart(2, 0)} : ${minute
        .toString()
        .padStart(2, 0)} : ${second.toString().padStart(2, 0)}`
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      clockDisplay();
    }, 1000);
  }, []);

  return (
    <div className="digital-clock text-center">
      <p>{date}</p>
      <p className=" text-4xl">{time}</p>
    </div>
  );
}

export default DigtalClock_One;

// useEffect(() => {
//   const timer = setInterval(() => {
//     setTime(new Date());
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);

// useEffect(() => {
//   setHour(time.getHours().toString().padStart(2, 0));
//   setMinute(time.getMinutes().toString().padStart(2, 0));
//   setSecond(time.getSeconds().toString().padStart(2, 0));
// }, [time]);

//
//
//
//
//
//
//

// useEffect(() => {
//   const timer = setInterval(() => {
//     setTime(new Date());
//   }, 1000);
// }, []);

// useEffect(() => {
//   setHour(time.getHours().toString().padStart(2, 0));
//   setMinute(time.getMinutes().toString().padStart(2, 0));
//   setSecond(time.getSeconds().toString().padStart(2, 0));

//   hour >= 12 ? setPeriod("PM") : setPeriod("AM");

//   if (hour >= 12) {
//     // setHour(time.getHours().toString().padStart(2, 0)) - 12;
//     setHour(time)
//   } else {
//     setHour(time.getHours().toString().padStart(2, 0));
//   }
// }, [time]);
