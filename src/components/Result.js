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
  const getBMIDescription = BMI => {
    if (BMI < 15) return "Very severely underweight";
    if (BMI < 16) return "Severely underweight";
    if (BMI < 18.5) return "Underweight";
    if (BMI < 25) return "Normal";
    if (BMI < 30) return "Overweight";
    if (BMI < 35) return "Obese Class I";
    if (BMI < 40) return "Obese Class II";
    return "Obese Class III";
  }
  const result = initWeight - desiredWeight > 0 ? "lose" : "gain";

  return (
    <div>
      <p>You want {result} <span className="value_bold">{Math.abs(initWeight - desiredWeight)}</span> kg</p>
      <p>Your current BMI is <span className="value_bold">{getBMI(initWeight, height)}</span> ({getBMIDescription(getBMI(initWeight, height))})</p>
      <p>Your desired BMI is <span className="value_bold">{getBMI(desiredWeight, height)}</span> ({getBMIDescription(getBMI(desiredWeight, height))})</p>
      <p>You should {result} <span className="value_bold">{changePerDay(Math.abs(initWeight - desiredWeight), getDateDifference(startDate, endDate))}</span> kg per day</p>
      {getDateDifference(startDate, endDate) >= 7 ? <p>You should {result} <span className="value_bold">{changePerDay(Math.abs(initWeight - desiredWeight), (getDateDifference(startDate, endDate)) / 7)}</span> kg per week</p> : null}
    </div>
  );
}

export default Result;