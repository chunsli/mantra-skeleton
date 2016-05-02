import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Home from '../components/Home.js';

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
)(Home);
