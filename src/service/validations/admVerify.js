const { create } = require('../documents/users');

module.exports = async (email, password) => {
  const { EMAIL_ADM, PASSWORD_ADM } = process.env;
  
  if (email !== EMAIL_ADM || password !== PASSWORD_ADM) {
    return null;
  }

  const created = await create({ email, password });

  return created;
};
