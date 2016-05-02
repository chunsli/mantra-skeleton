import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Home from '../components/Home.jsx';

const depsMapper = (context, actions) => ({
  context: () => context
});

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections} = context();
  const { Likes } = Collections;

  const sub = Meteor.subscribe('likes.list');
  if (sub.ready()) {
    const likes = Likes.find().fetch();
    onData(null, {
      likes
    });
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
