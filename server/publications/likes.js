import { Likes } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('likes.list', function () {
    if (!this.userId) {
      throw new Meteor.Error('likes.list', 'Must be logged in to get likes list.');
    }

    return Likes.find();
  });
}
