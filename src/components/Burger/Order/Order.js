import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
  const ingredients = [];

  for (let ingredientsName in props.ingredients) {
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ig.name} {ig.amount}
      </span>
    );
  });

  return (
    <div className={styles.Order}>
      <p>Ingredients : {ingredientOutput}</p>
      <p>
        Total Price : <strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
