import {Meteor} from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'account.createProfile'({name, age, gender, url}) {
      check(arguments[0], {
        name: String,
        age: String,
        gender: String,
        url: String
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('account.createProfile', 'Must be logged in to create profile.');
      }

      Meteor.users.update(userId, {
        $set: {name, age, gender, url}
      });
    }
  });
}
