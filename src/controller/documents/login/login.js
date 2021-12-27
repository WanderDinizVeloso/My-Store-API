const { OK } = require('http-status-codes').StatusCodes;

const { login } = require('../../../service/documents/login');
const { invalid } = require('../../statusAndMessage');
const { EMAIL_OR_PASSWORD } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const newLogin = { email, password };

  const token = await login(newLogin);

  if (!token) {
    return next(invalid(EMAIL_OR_PASSWORD));
  }

  return res
    .status(OK)
    .json({ token });
};
