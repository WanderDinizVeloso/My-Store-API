const { CREATED, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/users');
const { createdSuccessfully, registered } = require('../../../service/utils/messages');
const { EMAIL, USER } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: registered(EMAIL),
  },
};

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = { firstName, lastName, email, password };

  const created = await create(newUser);

  if (!created) { return next(ERROR.BAD_REQUEST); }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(USER),
      createdUser: created,
    });
};
