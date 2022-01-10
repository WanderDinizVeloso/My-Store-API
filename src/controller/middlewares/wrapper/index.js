const LENGTH = 1;

const tryCatchWrapper = (handler) => async (req, res, next) => {
  try {
    return handler(req, res, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = (handlers) => {
  if (handlers.length === LENGTH) { return tryCatchWrapper(handlers[0]); }

  return handlers.map((handler) => tryCatchWrapper(handler));
};
