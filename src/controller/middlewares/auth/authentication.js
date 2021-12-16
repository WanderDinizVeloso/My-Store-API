const { BAD_REQUEST, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { verifyToken } = require('../../../service/auth');
const { invalid, notFound } = require('../../../service/utils/messages');

const TOKEN = 'token';

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      status: NOT_FOUND,
      message: notFound(TOKEN),
    });
  }

  const user = verifyToken(authorization);

  if (!user) {
    return next({
      status: BAD_REQUEST,
      message: invalid(TOKEN),
    });
  }

  req.user = user;

  return next();
};
