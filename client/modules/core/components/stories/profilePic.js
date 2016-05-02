import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProfilePic from '../ProfilePic';

storiesOf('ProfilePic', module)
  .add('with text', () => (
    <ProfilePic />
  ));