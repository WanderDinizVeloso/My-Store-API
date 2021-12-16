const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyToken } = require('../../service/auth');
const { invalid } = require('../../service/utils/messages');
const { verifyRequeriment } = require('../../service/validations');

const TOKEN = 'token';
const LENGTH = 301;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  const verifyAuthorization = verifyRequeriment(authorization, LENGTH);

  if (!verifyAuthorization || verifyAuthorization === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: invalid(TOKEN),
    });
  }

  const user = verifyToken(authorization) || null;

  if (!user) {
    return next({
      status: BAD_REQUEST,
      message: invalid(TOKEN),
    });
  }

  req.user = user;

  return next();
};
