const verifyRequeriment = require('./fieldVerify');
const verifyUnity = require('./unityVerify');

const LENGTH = 4;
const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;

module.exports = (sale) => {
  const { name, category, unity } = sale;

  const namecheck = verifyRequeriment(name, LENGTH);
  const categoryCheck = verifyRequeriment(category, LENGTH);
  const unityCheck = verifyUnity(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (namecheck !== name || categoryCheck !== category || unityCheck !== unity) {
    return null;
  }

  return { name, category, unity };
};