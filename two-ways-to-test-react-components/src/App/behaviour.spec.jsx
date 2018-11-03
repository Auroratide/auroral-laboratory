import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '.';

configure({ adapter: new Adapter() });

/**
 * Behaviour tests are necessary when there is user interaction that
 * manipulates state. Since <App /> is the component that contains the state,
 * this is the component where we have the behaviour test.
 * 
 * Notice the structure of a behaviour test:
 *   Given an initial state (in this case, the default state)
 *   When the USER does some action
 *   Then an expected change occurs
 * 
 * The behaviour test is also used to test the integration with our external
 * state management, MobX.
 */

describe('<App /> Behaviour', () => {
  let wrapper;

  const userChangesColor = color => wrapper.find('.text-input').simulate('change', {
    target: {
      value: color
    }
  });

  const getBoxColor = () => wrapper.find('.colored-box').props().style.background;

  it('changes the color of the color box when a new color is inputted', () => {
    // Given
    wrapper = mount(<App />);

    // When
    userChangesColor('#999');

    // Then
    expect(getBoxColor()).toEqual('#999');
  });
});
