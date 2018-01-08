import React from 'react';

export interface BarChartProps {
    title: string;
    data: number[];
}

class BarChart extends React.Component<BarChartProps> {

    componentDidMoint() {
        const { title, data, color } = this.props;
    }

    render() {
        return (
            <div className="cs-barchart">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default ReactFauxDom.withFauxDOM(BarChart);
