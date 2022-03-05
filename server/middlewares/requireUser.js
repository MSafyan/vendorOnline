const requireUser =
  ({ self } = {}) =>
  (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (self && user._id !== req.params._id) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    next();
  };

module.exports = requireUser;
