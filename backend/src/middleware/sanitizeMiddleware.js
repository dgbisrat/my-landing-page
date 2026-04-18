const { sanitizeUserData } = require("../utils/sanitizers");

const sanitizeRequest = (req, res, next) => {
  if (req.body) {
    req.body = sanitizeUserData(req.body);
  }
  if (req.query) {
    req.query = sanitizeUserData(req.query);
  }
  if (req.params) {
    req.params = sanitizeUserData(req.params);
  }
  next();
};

module.exports = sanitizeRequest;
