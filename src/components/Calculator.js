import React from 'react';
import './Calculator.css';
import Input from "./Input";
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
  }

  handleInputChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  componentDidMount() {
    this.setState({
      initWeight: (this.minAndMaxValues.weightMin + this.minAndMaxValues.weightMax) / 2,
      desiredWeight: (this.minAndMaxValues.weightMin + this.minAndMaxValues.weightMax) / 2,
      height: (this.minAndMaxValues.heightMin + this.minAndMaxValues.heightMax) / 2,

    })
  }

  render() {
    return (
      <div className="calculator">
        <Input name="initWeight" text="Initial weight" unit="kg" min={this.minAndMaxValues.weightMin} max={this.minAndMaxValues.weightMax} value={this.state.initWeight} onChange={this.handleInputChange} result={this.state.initWeight} />
        <Input name="desiredWeight" text="Desired weight" unit="kg" min={this.minAndMaxValues.weightMin} max={this.minAndMaxValues.weightMax} value={this.state.desiredWeight} onChange={this.handleInputChange} result={this.state.desiredWeight} />
        <Input name="height" text="Height" unit="cm" min={this.minAndMaxValues.heightMin} max={this.minAndMaxValues.heightMax} value={this.state.height} onChange={this.handleInputChange} result={this.state.height} />
      </div>
    );
  }
}

export default Calculator;