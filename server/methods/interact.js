import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Likes } from '/lib/collections';

export default function () {
  Meteor.methods({
    'interact.like'({lookingAtUserId}) {
      check(arguments[0], {
        lookingAtUserId: String,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('interact.like', 'Must be logged in to like someone');
      }

      Likes.upsert({
        userId,
        likeUserId: lookingAtUserId,
      });
    }
  });
}
