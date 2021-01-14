import React from 'react';

import BurgerLogo from '../../assests/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={BurgerLogo} alt="burger-logo" />
    </div>
  );
};

export default Logo;
