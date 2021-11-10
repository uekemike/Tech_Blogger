const { User } = require('../models');

const userData = [{
        username: 'David',
        password: 'Young'

    },
    {
        username: 'Mary',
        password: 'jake'
    },
    {
        username: 'Joe',
        password: 'Joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;