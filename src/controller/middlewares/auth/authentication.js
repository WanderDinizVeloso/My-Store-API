const { BAD_REQUEST, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { verifyToken } = require('../../../service/auth');
const { invalid, notFound } = require('../../../service/utils/messages');
const { TOKEN } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(TOKEN),
  },
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: invalid(TOKEN),
  },
};

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) { return next(ERROR.NOT_FOUND); }

  const user = verifyToken(authorization);

  if (!user) { return next(ERROR.BAD_REQUEST); }

  req.user = user;

  return next();
};
