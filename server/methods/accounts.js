import {Meteor} from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'account.setName'({name}) {
      check(arguments[0], {
        name: String,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('account.setName', 'Must be logged in to set name');
      }

      Meteor.users.update(userId, {
        $set: { displayName: name },
      });
    }
  });

  Meteor.methods({
    'account.setAge'({age}) {
      check(arguments[0], {
        age: Number,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('account.setAge', 'Must be logged in to set age');
      }

      Meteor.users.update(userId, {
        $set: { age },
      });
    }
  });

  Meteor.methods({
    'account.setProfilePic'({url}) {
      check(arguments[0], {
        url: String,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('account.setProfilePic', 'Must be logged in to set profile pic.');
      }

      Meteor.users.update(userId, {
        $set: { url },
      });
    }
  });

  Meteor.methods({
    'account.setGender'({gender}) {
      check(arguments[0], {
        gender: String,
      });

      const userId = this.userId;
      if (!userId) {
        throw new Meteor.Error('account.setGender', 'Must be logged in to set gender pic.');
      }

      Meteor.users.update(userId, {
        $set: { gender },
      });
    }
  });
}
