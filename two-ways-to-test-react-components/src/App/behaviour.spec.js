import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '.';

configure({ adapter: new Adapter() });

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
