import { Likes, Match } from '/lib/collections';

export default function () {
  Likes.after.insert((userId, doc) => {
    const { likeUserId } = doc;

    const like = Likes.findOne({
      userId: likeUserId,
      likeUserId: userId,
    });

    if (like) {
      Match.insert({
        userIds: [ userId, likeUserId ],
      });
    }
  });
}
