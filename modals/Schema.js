const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  id: {
    type: 'number',
    required: true,
  },
});

const User = mongoose.model('Users', UserScheme);

module.exports = User;
