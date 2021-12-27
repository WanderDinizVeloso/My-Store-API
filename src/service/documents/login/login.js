const { compare } = require('bcrypt');

const { getToken } = require('../../auth');
const { admVerify } = require('../../validations');
const { findEmail } = require('../../functions');

module.exports = async ({ email, password }) => {
  await admVerify(email, password);
  
  const userFound = await findEmail({ email });
  
  if (!userFound) {
    return null;
  }
  
  const user = await compare(password, userFound.password);
 
  if (!user) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = userFound;

  const token = getToken(userWithoutPassword);

  return token;
};
