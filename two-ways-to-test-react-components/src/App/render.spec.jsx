import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './component';
import State from './state';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders', () => {
    expect(shallow(<App state={new State()} />)).toHaveLength(1);
  });
});