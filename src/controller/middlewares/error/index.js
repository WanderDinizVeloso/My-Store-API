const { INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

const { internalError } = require('../../statusAndMessage');
const { UNAUTHENTICATED } = require('../../../service/utils/strings');
const { create } = require('../../../service/documents/error');

module.exports = async (err, req, res, _next) => {
  const { status = null, message } = err;
  
  const {
    method,
    originalUrl: URL,
    body: { password, ...bodyWithoutPassword },
    user = UNAUTHENTICATED,
  } = req;

  if (status) {
    return res
    .status(status)
    .json({ error: { message } });
  }
  
  await create({ message, method, URL, bodyWithoutPassword, user });

  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ error: { message: internalError() } });
};
