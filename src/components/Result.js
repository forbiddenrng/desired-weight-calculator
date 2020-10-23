import React from 'react';

const Result = (props) => {
  const { initWeight, desiredWeight, height, startDate, endDate } = props.data

  const getDateDifference = (dateFirst, dateSecond) => {
    const firstDate = new Date(dateFirst).getTime();
    const secondDate = new Date(dateSecond).getTime();
    console.log((secondDate - firstDate) / 1000)
  }
  const getBMI = (weight, height) => {
    const BMI = (weight / Math.pow((height / 100), 2)).toFixed(1)
    console.log(weight, height)
    return BMI;
  }
  return (
    <div>
      <p>You want {initWeight - desiredWeight > 0 ? "loose" : "gain"} {Math.abs(initWeight - desiredWeight)}kg</p>
      <p>Your current BMI is {getBMI(initWeight, height)}</p>
      <p>Your desired BMI is {getBMI(desiredWeight, height)}</p>
    </div>
  );
}

export default Result;