import { configure } from '@kadira/storybook';

function loadStories() {
  require('../client/modules/core/components/stories/profilePic');
  require('../client/modules/core/components/stories/home');
  require('../client/modules/core/components/stories/CreateProfile');
  require('../client/modules/core/components/stories/ViewProfile');
  require('../client/modules/core/components/stories/DateRate');

  // require as many stories as you need.
}

configure(loadStories, module);
