import _ from 'lodash';
import React from 'react';
import * as d3 from 'd3';

import ReactFauxDom, { Element } from 'react-faux-dom';
import { Element } from '../jspm_packages/npm/@types/react-faux-dom@3.2.0/index';

export interface DecadeCount {
  decade: string;
  count: number;
}

export interface BarChartProps {
  title: string;
  data: DecadeCount[];
  chart: string;
}

class BarChart extends React.Component<BarChartProps> {
  componentDidMount() {
    console.log('hi');
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 600 - margin.bottom - margin.top;

    const { title, data, color } = this.props;

    const decades = data.map(d => d.decade);
    const counts = data.map(d => d.count);

    const xDomain = d3.extent(decades).map(d => new Date(parseInt(d), 0, 1));
    // TODO try this with scaleTime
    const xScale = d3
      .scaleTime()
      .domain(xDomain)
      .range([0, width]);

    //xScale.ticks(d3.timeYear.every(10))

    const yScale = d3
      .scaleLinear()
      .domain([0, _.max(counts)])
      .range([0, height]);

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

    // shift over one to have the bar be right of the decade instead of ending at it
    svg
      .selectAll('bar')
      .data(data)
      .enter()
      .append('rect')
      .style('fill', 'steelblue')
      .attr('x', d => xScale(new Date(parseInt(d.decade) + 10, 0, 1)))
      .attr('width', width / data.length)
      .attr('y', d => height - yScale(d.count))
      .attr('height', d => yScale(d.count));
  }

  render() {
    return <div className="cs-barchart">{this.props.chart}</div>;
  }
}

export default ReactFauxDom.withFauxDOM(BarChart);
