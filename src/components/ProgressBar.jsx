import React from 'react';

const ProgressBar = ({ value = 0, max = 100, height = 12 }) => {
  const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  const color = percent >= 75 ? '#16a34a' : percent >= 40 ? '#f59e0b' : '#ef4444';

  return (
    <div style={{ width: '100%' }} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div style={{ background: '#e5e7eb', borderRadius: 6, height }}>
        <div
          style={{
            width: `${percent}%`,
            background: color,
            height,
            borderRadius: 6,
            transition: 'width 300ms ease',
          }}
        />
      </div>
      <div style={{ marginTop: 6, fontSize: 12 }}>{percent}%</div>
    </div>
  );
};

export default ProgressBar;
