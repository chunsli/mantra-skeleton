import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DateRate from '../DateRate';

storiesOf('DateRate', module)
  .add('default', () => (
    <DateRate />
  ));