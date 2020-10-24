import React from 'react';

const Result = (props) => {
  const { initWeight, desiredWeight, height, startDate, endDate } = props.data

  const getDateDifference = (dateFirst, dateSecond) => {
    const firstDate = new Date(dateFirst).getTime();
    const secondDate = new Date(dateSecond).getTime();
    // console.log((secondDate - firstDate) / 86400000)
    return (secondDate - firstDate) / 86400000
  }
  const getBMI = (weight, height) => {
    const BMI = (weight / Math.pow((height / 100), 2)).toFixed(1)
    // console.log(weight, height)
    return BMI;
  }
  const changePerDay = (weight, days) => {
    // console.log("ok")
    return (weight / days).toFixed(2)
  }
  const result = initWeight - desiredWeight > 0 ? "loose" : "gain";

  return (
    <div>
      <p>You want {result} {Math.abs(initWeight - desiredWeight)}kg</p>
      <p>Your current BMI is {getBMI(initWeight, height)}</p>
      <p>Your desired BMI is {getBMI(desiredWeight, height)}</p>
      <p>You should {result} {changePerDay(Math.abs(initWeight - desiredWeight), getDateDifference(startDate, endDate))} kg per day</p>
      {getDateDifference(startDate, endDate) >= 7 ? <p>You should {result} {changePerDay(Math.abs(initWeight - desiredWeight), (getDateDifference(startDate, endDate)) / 7)} kg per week</p> : null}
    </div>
  );
}

export default Result;