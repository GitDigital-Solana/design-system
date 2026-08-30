import React from 'react';

// Minimal heatmap placeholder component. Replace with Nivo/Vega implementation later.
const Heatmap = ({ data = [], width = 300, height = 120 }) => {
  // data: array of { x, y, value }
  const max = Math.max(1, ...data.map(d => d.value || 0));

  return (
    <svg width={width} height={height} role="img" aria-label="Heatmap">
      {data.map((d, i) => {
        const size = 10;
        const x = (i % 30) * (size + 2);
        const y = Math.floor(i / 30) * (size + 2);
        const intensity = Math.round((d.value / max) * 200 + 55);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={size}
            height={size}
            fill={`rgb(${255 - intensity}, ${200 - Math.floor(intensity / 2)}, ${intensity})`}
          />
        );
      })}
    </svg>
  );
};

export default Heatmap;
