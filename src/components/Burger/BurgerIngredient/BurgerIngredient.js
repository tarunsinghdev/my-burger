import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case 'vegetable-patty':
        ingredient = <div className={styles.VegetablePatty}></div>;
        break;
      case 'cheese':
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case 'salad':
        ingredient = <div className={styles.Salad}></div>;
        break;
      case 'paneer':
        ingredient = <div className={styles.Paneer}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
