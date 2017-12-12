import React from 'react'
import * as d3 from 'd3'
import ReactFauxDom from 'react-faux-dom'


// https://www.digitalocean.com/community/tutorials/how-to-make-a-bar-chart-with-javascript-and-the-d3-library

class MyReactComponent extends React.Component {
  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'chart')

  

    var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

    const svg = d3.select(faux).append("svg")
              .attr("height","100%")
              .attr("width","100%");



    svg.selectAll("rect")
        .data(dataArray)
        .enter().append("rect")
          .attr("height", function(d, i) {return (d * 10)})
          .attr("width","40")
          .attr("x", function(d, i) {return (i * 60) + 25})
          .attr("y", function(d, i) {return abs(400 - (d * 10))});

        this.props.animateFauxDOM(150)
  }



  render () {
    return (
      <div>
        <h2>Here is some fancy data:</h2>
        <div className='renderedD3'>
          {this.props.chart}
        </div>
      </div>
    )
  }
}

MyReactComponent.defaultProps = {
  chart: 'loading'
}


// TODO there is something weird with import
export default ReactFauxDom.withFauxDOM(MyReactComponent);
