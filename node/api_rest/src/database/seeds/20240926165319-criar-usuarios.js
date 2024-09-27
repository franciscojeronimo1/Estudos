const bcryptjs = require('bcrypt');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'Luiz',
    email: 'luiz1@gmail.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Luiz2',
    email: 'luiz2@gmail.com',
    password_hash: await bcryptjs.hash('654321', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Lui3',
    email: 'luiz3@gmail.com',
    password_hash: await bcryptjs.hash('434343', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: () => {},
};
