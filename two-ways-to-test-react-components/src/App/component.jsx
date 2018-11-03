import React from 'react';
import ColoredBox from '../ColoredBox';
import TextInput from '../TextInput';

const App = ({ state }) =>
  <main>
    <p>Type any valid color into the text box below! For example, <code>#41AAB7</code>.</p>
    <TextInput onChange={e => state.change(e.target.value)} />
    <ColoredBox color={state.color} />
  </main>;

export default App;