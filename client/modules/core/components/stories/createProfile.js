import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CreateProfile from '../CreateProfile';

storiesOf('CreateProfile', module)
  .add('default', () => (
    <CreateProfile />
  ));