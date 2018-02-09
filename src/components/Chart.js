//charts tutoirial: https://www.youtube.com/watch?v=Ly-9VTXJlnA

import React from 'react';

import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			chartData: props.chartData
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
		location: 'City'
	}

	render(){
		return (
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Cities by Population - ' + this.props.location,
							fontsize: 25
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}
					}}
				/>
				<hr />
				<Line
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Cities by Population - ' + this.props.location,
							fontsize: 25
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}
					}}
				/>
				<hr />
				<Pie
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Cities by Population - ' + this.props.location,
							fontsize: 25
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}
					}}
				/>
			</div>
		);
	}
}

export default Chart;