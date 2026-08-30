import React from 'react';
import ProgressBar from './ProgressBar';

const GoalCard = ({ title, metric, current = 0, target = 100, owner = null }) => {
  return (
    <div style={{ border: '1px solid #e5e7eb', padding: 12, borderRadius: 8, width: 360 }}>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>{metric}</div>
      <ProgressBar value={current} max={target} />
      {owner && <div style={{ marginTop: 8, fontSize: 12 }}>Owner: {owner}</div>}
    </div>
  );
};

export default GoalCard;
