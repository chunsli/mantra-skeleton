export default {
  myAction(context) {
    console.log('myAction');
  },

  like({Meteor}, likeUserId) {
    Meteor.call('likes.add', {likeUserId}, err => {
      if (err) { alert(err); }
    });
  },
};
