import React from 'react';
import * as d3 from 'd3';
import ReactFauxDom from 'react-faux-dom';

// https://www.digitalocean.com/community/tutorials/how-to-make-a-bar-chart-with-javascript-and-the-d3-library

interface MyReactComponentProps {
  dataArray: number[];
}

class MyReactComponent extends React.Component {
  componentDidMount() {
    // this.props.animateFauxDOM(150)
  }

  render() {
    //const faux = this.props.connectFauxDOM('div', 'chart')

    const faux = ReactFauxDom.createElement('div');

    const svg = d3
      .select(faux)
      .append('svg')
      .attr('height', '100%')
      .attr('width', '100%');

    svg
      .selectAll('rect')
      .data(this.props.dataArray)
      .enter()
      .append('rect')
      .attr('height', function(d, i) {
        return d * 10;
      })
      .attr('width', '40')
      .attr('x', function(d, i) {
        return i * 60 + 25;
      })
      .attr('y', function(d, i) {
        return Math.abs(400 - d * 10);
      });

    return faux.toReact();
  }
}

MyReactComponent.defaultProps = {
  chart: 'loading'
};

// TODO there is something weird with import
export default ReactFauxDom.withFauxDOM(MyReactComponent);
