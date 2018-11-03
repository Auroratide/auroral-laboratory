import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './component';
import State from './state';

configure({ adapter: new Adapter() });

/**
 * Although <App /> contains state and hence requires a behaviour test, it's
 * rendering logic is very straightforward. Therefore, it only needs the
 * default sanity render test.
 * 
 * Note, though, that we populate the state. In this case, state is a required
 * prop, so we needed to include it. This could be notated with PropTypes.
 */

describe('<App />', () => {
  it('renders', () => {
    expect(shallow(<App state={new State()} />)).toHaveLength(1);
  });
});