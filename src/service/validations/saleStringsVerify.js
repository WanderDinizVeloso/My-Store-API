const stringsVerify = require('./stringsVerify');
const unityVerify = require('./unityVerify');

const LENGTH = 4;
const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;

module.exports = (sale) => {
  const { name, category, unity } = sale;

  const verifiedName = stringsVerify(name, LENGTH);
  const verifiedCategory = stringsVerify(category, LENGTH);
  const verifiedUnity = unityVerify(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (verifiedName !== name || verifiedCategory !== category || verifiedUnity !== unity) {
    return null;
  }

  return { name, category, unity };
};
