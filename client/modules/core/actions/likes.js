export default {
  like({Meteor}, likeUserId) {
    Meteor.call('likes.add', {likeUserId}, err => {
      if (err) { alert(err); }
    });
  },
};
