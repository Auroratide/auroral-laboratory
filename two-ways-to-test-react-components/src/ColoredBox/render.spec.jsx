import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColoredBox from './component';

configure({ adapter: new Adapter() });

/**
 * The <ColoredBox /> component has some internal rendering logic for
 * determining the color of the text. Therefore, we test that logic in the
 * render test as shown below.
 * 
 * We keep our sanity rendering test as a safety net.
 */

describe('<ColoredBox />', () => {
  it('renders', () => {
    expect(shallow(<ColoredBox />)).toHaveLength(1);
  });

  describe('text color', () => {
    it('uses white text when the color is sufficiently dark', () => {
      const wrapper = shallow(<ColoredBox color='#000000' />);

      expect(wrapper.props().style.color).toBe('white');
    });

    it('uses black text when the color is sufficiently light', () => {
      const wrapper = shallow(<ColoredBox color='#FFFFFF' />);

      expect(wrapper.props().style.color).toBe('black');
    });
  });
  
});