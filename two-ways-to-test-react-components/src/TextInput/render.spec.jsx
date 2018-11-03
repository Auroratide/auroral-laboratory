import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './component';

configure({ adapter: new Adapter() });

/**
 * The <TextInput /> component is an extremly simple wrapper for the HTML input
 * tag. It has no internal logic, and therefore it only needs the sanity render
 * test.
 */

describe('<TextInput />', () => {
  it('renders', () => {
    expect(shallow(<TextInput />)).toHaveLength(1);
  });
});