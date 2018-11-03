import { inject } from 'mobx-react';
import State from './state';

const stateToProps = state => ( {
  state: new State()
} );

export default inject(stateToProps);