import React from 'react';
import ClosableAlert from '../ClosableAlert';

const App = () =>
  <main>
    <ClosableAlert title='Success!'>
      You successfully created a happy alert!
    </ClosableAlert>
    <article>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu arcu non libero eleifend sodales. Fusce mattis mollis turpis. Mauris lacus enim, sagittis vitae tortor id, sagittis aliquam est. Cras blandit eleifend odio vitae viverra.
    </article>
  </main>;

export default App;