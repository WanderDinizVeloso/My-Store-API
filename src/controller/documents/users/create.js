const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/users');

const MESSAGE = 'user created successfully.';

module.exports = async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = { firstName, lastName, email, password };

  const created = await create(newUser);

  return res
    .status(CREATED)
    .json({
      message: MESSAGE,
      createdUser: created,
    });
};
