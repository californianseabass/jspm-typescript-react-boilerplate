import React from 'react';
import * as d3 from 'd3';

import ReactFauxDom, { Element } from 'react-faux-dom';
import { Element } from '../jspm_packages/npm/@types/react-faux-dom@3.2.0/index';

export interface BarChartProps {
  title: string;
  data: number[];
  chart: string;
}

class BarChart extends React.Component<BarChartProps> {
  componentDidMount() {
    console.log('hi');
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 600 - margin.bottom - margin.top;

    const { title, data, color } = this.props;
    const xScale = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1)
      .tickFormat(d3.timeFormat('%Y'));

    const xAxis = d3.axisBottom(xScale);

    const faux = this.props.connectFauxDOM('div', 'chart');

    const svg = d3
      .select(faux)
      .append('svg')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right);

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(' + margin.left + ', ' + height + ')')
      .call(xAxis);
  }

  render() {
    return <div className="cs-barchart">{this.props.chart}</div>;
  }
}

export default ReactFauxDom.withFauxDOM(BarChart);
