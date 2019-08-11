import React from 'react';
import Svg, { Line } from 'react-native-svg';

const HorizontalDashedLine = (props) => {
  return (
    <Svg height={100} width={100} >
      <Line
        stroke="black"
        strokeDasharray="[3, 10]"
        strokeLinecap="round"
        strokeWidth="3"
        x1="1"
        y1="20"
        x2={props.width}
        y2="20"
      />
    </Svg>
  );
}

export default HorizontalDashedLine;