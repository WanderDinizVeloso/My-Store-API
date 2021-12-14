const { StatusCodes: { INTERNAL_SERVER_ERROR } } = require('http-status-code');

module.exports = async (err, _req, res, _next) => {
  const { status = null, message } = err;
  
  if (status) {
    return res
      .status(status)
      .json({ error: { message } });
  }

  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ error: { message: 'sorry, internal error.' } });
};
