import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateProfile from '../components/CreateProfile.js';

const depsMapper = (context, actions) => ({
  context: () => context,
  createProfile: actions.account.createProfile,
});

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections} = context();
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateProfile);
