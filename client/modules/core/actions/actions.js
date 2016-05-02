export default {
  myAction(context) {
    console.log('myAction');
  },

  like({Meteor}, likeUserId) {
    Meteor.call('interact.like', {likeUserId}, err => {
      if (err) { alert(err); }
    });
  },
};
