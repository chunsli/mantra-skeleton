import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('users.list', function () {
    if (!this.userId) {
      throw new Meteor.Error('users.list', 'Must be logged in to get users list.');
    }

    const options = {
      fields: {
        emails: 1,
        name: 1,
        age: 1,
        gender: 1,
        url: 1,
      },
    };

    return Meteor.users.find({}, options);
  });
}
