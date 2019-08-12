import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  width: string,
}

const HorizontalDottedLine = (props: Props) => {
  return (
    <Svg height={100} width={props.width} >
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

export default HorizontalDottedLine;