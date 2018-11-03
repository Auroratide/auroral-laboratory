import State from './state';

/**
 * Since the state is its own module, we have a unit test for it. The state
 * could theoretically be used entirely independently of React, so this test
 * has nothing to do with React or Enzyme.
 */

describe('App State', () => {
  it('changes color when the color is valid', () => {
    const state = new State('#444');
    
    state.change('#555');

    expect(state.color).toEqual('#555');
  });

  it('does not change color when the color is invalid', () => {
    const state = new State('#444');
    
    state.change('bad color');

    expect(state.color).toEqual('#444');
  });
});