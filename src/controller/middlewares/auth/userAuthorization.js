const { notAuthorized } = require('../../statusAndMessage');
const { ROLE_ADM } = require('../../../service/utils/strings');

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const { _id: idAuth, role } = req.user;

  if (id !== idAuth && role !== ROLE_ADM) {
    return next(notAuthorized());
  }

  return next();
};
