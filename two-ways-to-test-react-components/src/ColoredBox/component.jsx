import React from 'react';
import Color from 'color';

const isLight = c => Color(c).luminosity() > 0.5;

const ColoredBox = ({ color }) =>
  <div className='colored-box' style={{
    background: color,
    color: isLight(color) ? 'black' : 'white'
  }}>
    {color}
  </div>;

export default ColoredBox;