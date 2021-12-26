const { OK, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/users');
const { modifiedSuccessfully, notFound, registered } = require('../../../service/utils/messages');
const { USER, EMAIL_EXIST, NEW_EMAIL } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(USER),
  },
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: registered(NEW_EMAIL),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUpdate = { id, firstName, lastName, email, password };

  const updated = await update(newUpdate);

  if (!updated) { return next(ERROR.NOT_FOUND); }
  if (updated === EMAIL_EXIST) { return next(ERROR.BAD_REQUEST); }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
