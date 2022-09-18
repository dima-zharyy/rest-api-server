const { BadRequest } = require('http-errors');
const { isValidObjectId } = require('mongoose');

const isValid = (req, _, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    const error = BadRequest(`${contactId} is not correct id format`);
    next(error);
  }

  next();
};

module.exports = isValid;
