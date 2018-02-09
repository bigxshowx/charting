import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {}
    }
  }

//learn more about the differences of Did mount vs. Will Mount:
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //AJAX Call here to call and fill the state with the chart Data
    this.setState({
      chartData: {
        labels: ['New York', 'Miami', 'Charlotte', 'Houton', 'LA', 'Verona'],
        datasets: [
          {
            label: 'Population',
            data: [25354, 43353, 33242, 26898, 38000, 31563],
            backgroundColor: ['red', '#58d891', 'blue', 'orange', 'green', 'yellow']
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart chartData={this.state.chartData} location="San Diego" legendPosition="bottom" />
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
