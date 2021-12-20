const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { notAuthorization } = require('../../../service/utils/messages');
const { ROLE_ADM } = require('../../../service/utils/strings');

const ERROR = {
  UNAUTHORIZED: {
    status: UNAUTHORIZED,
    message: notAuthorization(),
  },
};

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const { _id: idAuth, role } = req.user;

  if (id !== idAuth && role !== ROLE_ADM) { return next(ERROR.UNAUTHORIZED); }

  return next();
};
