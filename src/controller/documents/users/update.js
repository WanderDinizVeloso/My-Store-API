const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/users');
const { modifiedSuccessfully, notFound, registered } = require('../../statusAndMessage');
const { USER, EMAIL_EXIST, NEW_EMAIL } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUpdate = { id, firstName, lastName, email, password };

  const updated = await update(newUpdate);

  if (!updated) {
    return next(notFound(USER));
  }

  if (updated === EMAIL_EXIST) {
    return next(registered(NEW_EMAIL));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(USER),
      updatedUser: updated,
    });
};
