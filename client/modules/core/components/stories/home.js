import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Home from '../Home';

storiesOf('Home', module)
  .add('default', () => (
    <Home />
  ));