const { notAuthorized } = require('../../statusAndMessage');
const { ROLE_ADM } = require('../../../service/utils/strings');

module.exports = async (req, _res, next) => {
  const { role } = req.user;

  if (role !== ROLE_ADM) {
    return next(notAuthorized());
  }

  return next();
};
