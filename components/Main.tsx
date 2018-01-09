import React from 'react';

import BarChart, { BarChartProps } from 'jspm-typescript-react-boilerplate/components/BarChart.tsx';

export interface MainProps {
  barChart: BarChartProps;
}

export default (props: MainProps) => {
  const { barChart } = props;
  return (
    <div>
      <BarChart {...barChart} />
    </div>
  );
};
