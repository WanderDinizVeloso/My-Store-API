const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { notAuthorization } = require('../../../service/utils/messages');

const ROLE_ADM = 'adm';

module.exports = async (req, _res, next) => {
  const { role } = req.user;

  if (role !== ROLE_ADM) {
    return next({
      status: UNAUTHORIZED,
      message: notAuthorization(),
    });
  }

  return next();
};
