import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './containers/home';
import CreateProfile from './components/CreateProfile';
import ViewProfile from './components/ViewProfile';

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

  FlowRouter.route('/ViewProfile', {
    name: 'ViewProfile',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ViewProfile />)
      });
    }
  });

}
