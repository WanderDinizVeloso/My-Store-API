const { CREATED, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/users');
const { createdSuccessfully } = require('../../../service/utils/messages');
const { registered } = require('../../../service/utils/messages');

const USER = 'user';

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = { firstName, lastName, email, password };

  const created = await create(newUser);

  if (!created) {
    return next({
      status: BAD_REQUEST, message: registered(),
    });
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(USER),
      createdUser: created,
    });
};
