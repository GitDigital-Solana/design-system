import React from 'react';
import DonateButton from './DonateButton';

const Footer = ({ contactEmail = 'gitdigitalsolana@gmail.com' }) => (
  <footer style={{ padding: 20, borderTop: '1px solid #e5e7eb', marginTop: 40 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontWeight: 600 }}>Support GitDigital</div>
        <div style={{ fontSize: 13, color: '#6b7280' }}>Donate to the project or tip the maintainer</div>
        <div style={{ marginTop: 6, fontSize: 13 }}>
          Project: <a href="https://cash.app/$GitDigital" target="_blank" rel="noreferrer">$GitDigital</a>
          {' '}• Tip: <a href="https://cash.app/$RichardKindler1" target="_blank" rel="noreferrer">Tip Rick (personal)</a>
        </div>
      </div>
      <DonateButton />
    </div>
    <div style={{ marginTop: 12, fontSize: 12, color: '#6b7280' }}>Contact: gitdigitalsolana@gmail.com</div>
  </footer>
);

export default Footer;
