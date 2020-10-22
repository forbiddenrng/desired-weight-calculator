import React from 'react';
import './Calculator.css';
import Input from "./Input";
import DateInput from "./DateInput";
class Calculator extends React.Component {
  minAndMaxValues = {
    weightMin: 30,
    weightMax: 130,
    heightMin: 120,
    heightMax: 220,
  }
  state = {
    initWeight: 0,
    desiredWeight: 0,
    height: 0,
    startDate: 0,
    minStartDate: 0,
    endDate: 0,
    minEndDate: 0,
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  componentDidMount() {
    this.setState({
      initWeight: (this.minAndMaxValues.weightMin + this.minAndMaxValues.weightMax) / 2,
      desiredWeight: (this.minAndMaxValues.weightMin + this.minAndMaxValues.weightMax) / 2,
      height: (this.minAndMaxValues.heightMin + this.minAndMaxValues.heightMax) / 2,
      startDate: this.getCurrentDate(),
      endDate: this.getCurrentDate(),
      minStartDate: this.getCurrentDate(),
      minEndDate: this.getCurrentDate(),

    })
  }
  getCurrentDate = () => {
    const date = new Date();
    const dateString = date.toISOString().split("T")[0];
    return dateString;
  }
  handleDateChange = (e) => {
    if (e.target.name === "startDate") {
      this.setState({
        startDate: e.target.value,
        endDate: e.target.value,
        minEndDate: e.target.value
      })
    } else {
      this.setState({
        endDate: e.target.value
      })
    }

  }
  render() {
    return (
      <div className="calculator">
        <Input name="initWeight" text="Initial weight" unit="kg" min={this.minAndMaxValues.weightMin} max={this.minAndMaxValues.weightMax} value={this.state.initWeight} onChange={this.handleInputChange} result={this.state.initWeight} />
        <Input name="desiredWeight" text="Desired weight" unit="kg" min={this.minAndMaxValues.weightMin} max={this.minAndMaxValues.weightMax} value={this.state.desiredWeight} onChange={this.handleInputChange} result={this.state.desiredWeight} />
        <Input name="height" text="Height" unit="cm" min={this.minAndMaxValues.heightMin} max={this.minAndMaxValues.heightMax} value={this.state.height} onChange={this.handleInputChange} result={this.state.height} />

        <DateInput min={this.state.minStartDate} name="startDate" onChange={this.handleDateChange} value={this.state.startDate} title="Start date:" />
        <DateInput min={this.state.minEndDate} name="endDate" onChange={this.handleDateChange} value={this.state.endDate} title="Finish date:" />
      </div>
    );
  }
}

export default Calculator;