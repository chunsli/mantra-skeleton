import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import CreateProfile from './containers/createProfile';
import ViewProfile from './containers/viewProfile';

export default function (injectDeps, {Meteor, FlowRouter, Collections, LocalState}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/CreateProfile', {
    name: 'CreateProfile',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateProfile />)
      });
    }
  });

  FlowRouter.route('/view', {
    name: 'view',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ViewProfile />)
      });
    }
  });
}
