/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import AddToCart from './AddToCart.jsx';

function StyleSelector({ }) {
  const [styleName, setStyleName] = useState('');
  const [clicks, addClick] = useState(0);

  const getStyles = () => {
    axios.get('/api/products/16060/styles')
      .then((res) => {
        setStyleName(res.data.name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClick = () => {
    addClick(clicks + 1)
  }

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <div className="style-selector">
      <p>{styleName ? styleName : 'not working'}</p>
      <button onClick={() => handleClick()}>{clicks.toString()}</button>
    </div>
  );
}

export default StyleSelector;
