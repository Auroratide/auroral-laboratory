import React from 'react';
import Header from './Header';

/**
 * This is a pure presentational component, meaning it only renders from props
 * and contains no state. Using presentational components allows you to
 * separate behaviour from presentation.
 */

const ClosableAlert = ({ title, children, onClose }) =>
  <div className='closable-alert'>
    <Header title={title} onClose={onClose} />
    <div className='closable-alert_content'>
      {children}
    </div>
  </div>;

export default ClosableAlert;