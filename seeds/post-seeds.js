const { Post } = require('../models');

const postData = [{
    title: 'Working',
    content: 'Rome wasnt built in a day, neither was this site.',
    user_id: 1

  },
  {
    title: 'This site is bad',
    content: 'This site is MID at best, and we should leave.',
    user_id: 2
  },
  {
    title: 'Cats',
    content: 'Cats are pretty cool yeah?',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;