import React from 'react';
import styles from './Branding.module.scss';

// const assets = {
//   logoDefault: 'iggy-logo.svg',
//   logoWhite: 'iggy-logo-white.svg',
//   iconDefault: 'iggy-icon.svg',
//   iconWhite: 'iggy-icon-white.svg'
// };

function Branding() {
  return (
    <div className={styles.logo}>
      <img src='https://askiggy.com/logo/iggy-logo.svg' alt='Iggy' />
    </div>
  );
}

export default Branding;
