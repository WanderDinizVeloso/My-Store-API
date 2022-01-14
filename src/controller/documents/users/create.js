const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/users');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { EMAIL, USER } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const created = await create({ firstName, lastName, email, password });

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
