import { Meteor } from 'meteor/meteor';
import { Matches } from '/lib/collections';

export default function () {
  Meteor.publish('matches.list', function () {
    if (!this.userId) {
      throw new Meteor.Error('matches.list', 'Must be logged in to get users list.');
    }

    return Matches.find();
  });
}
