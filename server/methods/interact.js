import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Likes } from '/lib/collections';

export default function () {
  Meteor.methods({
    'interact.like'({likeUserId}) {
      check(arguments[0], {
        likeUserId: String,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('interact.like', 'Must be logged in to like someone');
      }

      Likes.upsert({
        userId,
        likeUserId,
      });
    }
  });
}
