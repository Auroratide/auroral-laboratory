import React from 'react';

/**
 * Header is a strict subcomponent of ClosableAlert. Therefore, it is grouped
 * inside the ClosableAlert folder. Note that since Header is itself a
 * component, it also is its own folder.
 */

const Header = ({ title, onClose }) =>
  <div className='closable-alert__header'>
    <span className='closable-alert__header_title'>{title}</span>
    <button onClick={onClose} className='closable-alert__header_close'>&times;</button>
  </div>;

export default Header;