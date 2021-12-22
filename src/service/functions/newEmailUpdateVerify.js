const findEmail = require('./findEmail');

module.exports = async (dataUser, user) => {
  if (user.email !== dataUser.email) {
    const newEmailVerify = await findEmail(dataUser);

    return newEmailVerify;
  }

  return null;
};
