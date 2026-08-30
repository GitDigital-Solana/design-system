import React from 'react';

const DonateButton = ({ className = '' }) => {
  const projectUrl = process.env.REACT_APP_FUNDING_URL || 'https://cash.app/$GitDigital';
  const personalUrl = 'https://cash.app/$RichardKindler1';

  return (
    <div className={className} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button
        onClick={() => window.open(projectUrl, '_blank')}
        aria-label="Donate to GitDigital"
        style={{ padding: '8px 12px' }}
      >
        Donate (GitDigital)
      </button>
      <button
        onClick={() => window.open(personalUrl, '_blank')}
        aria-label="Tip Rick (personal)"
        style={{ padding: '8px 12px' }}
      >
        Tip Rick (personal)
      </button>
    </div>
  );
};

export default DonateButton;
