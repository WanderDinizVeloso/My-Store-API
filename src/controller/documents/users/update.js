const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/users');
const { modifiedSuccessfully, notFound } = require('../../../service/utils/messages');
const { USER } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(USER),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUpdate = { id, firstName, lastName, email, password };

  const updated = await update(newUpdate);

  if (!updated) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
