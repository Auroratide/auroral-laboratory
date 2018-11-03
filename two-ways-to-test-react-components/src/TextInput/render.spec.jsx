import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './component';

configure({ adapter: new Adapter() });

describe('<TextInput />', () => {
  it('renders', () => {
    expect(shallow(<TextInput />)).toHaveLength(1);
  });
});