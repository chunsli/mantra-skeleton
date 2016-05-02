import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ViewProfile from '../ViewProfile';

storiesOf('ViewProfile', module)
  .add('default', () => (
    <ViewProfile />
  ));