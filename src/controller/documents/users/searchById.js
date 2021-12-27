const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/users');
const { notFound } = require('../../statusAndMessage');
const { USER } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await searchById(id);

  if (!user) {
    return next(notFound(USER));
  }

  return res
    .status(OK)
    .json({ user });
};
