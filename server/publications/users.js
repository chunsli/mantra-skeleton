import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('users.list', function () {
    if (!this.userId) {
      throw new Meteor.Error('users.list', 'Must be logged in to get users list.');
    }

    const options = {
      fields: {
        displayName: 1,
        emails: 1,
        profileImageUrl: 1,
        description: 1,
      },
    };

    return Meteor.users.find({}, options);
  });
}
