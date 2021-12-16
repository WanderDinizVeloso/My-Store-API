const { OK, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { login } = require('../../../service/documents/login');
const { invalid } = require('../../../service/utils/messages');

const EMAIL_OR_PASSWORD = 'email or password';

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const newLogin = { email, password };

  const token = await login(newLogin);

  if (!token) {
    return next({
      status: BAD_REQUEST,
      message: invalid(EMAIL_OR_PASSWORD),
    });
  }

  return res
    .status(OK)
    .json({ token });
};