const { INTERNAL_SERVER_ERROR } = require('http-status-codes').StatusCodes;

const { internalError } = require('../../../service/utils/messages');
const { create } = require('../../../service/documents/error');

module.exports = async (err, _req, res, _next) => {
  const { status = null, message } = err;

  await create({ status: status || INTERNAL_SERVER_ERROR, message });
  
  if (status) {
    return res
      .status(status)
      .json({ error: { message } });
  }

  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ error: { message: internalError() } });
};
