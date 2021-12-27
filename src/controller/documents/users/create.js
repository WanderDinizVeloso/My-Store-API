const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/users');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { EMAIL, USER } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = { firstName, lastName, email, password };

  const created = await create(newUser);

  if (!created) {
    return next(registered(EMAIL));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(USER),
      createdUser: created,
    });
};
