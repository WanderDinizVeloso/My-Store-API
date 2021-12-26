const findEmail = require('../functions/findEmail');

module.exports = async (dataUser, user) => {
  if (user.email !== dataUser.email) {
    const verifiedEmail = await findEmail(dataUser);

    return verifiedEmail;
  }

  return null;
};
