const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { notAuthorized } = require('../../../service/utils/messages');
const { ROLE_ADM } = require('../../../service/utils/strings');

const ERROR = {
  UNAUTHORIZED: {
    status: UNAUTHORIZED,
    message: notAuthorized(),
  },
};

module.exports = async (req, _res, next) => {
  const { role } = req.user;

  if (role !== ROLE_ADM) { return next(ERROR.UNAUTHORIZED); }

  return next();
};
