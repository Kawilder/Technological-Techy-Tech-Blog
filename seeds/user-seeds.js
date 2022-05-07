const { User } = require('../models');

const userData = [{
    username: 'Elden',
    password: '4321'
  },
  {
    username: 'Blood',
    password: '1124'
  },
  {
    username: 'John',
    password: 'John'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;