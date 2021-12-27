const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/users');
const { notFound } = require('../../../service/utils/messages');
const { USER } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(USER),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await searchById(id);

  if (!user) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ user });
};
