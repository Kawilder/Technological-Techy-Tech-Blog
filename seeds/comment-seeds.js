const { Comment } = require('../models');

const commentData = [{
    comment_text: "this is taking forEVER",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "It's not that bad my guy",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Cats are cool",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;