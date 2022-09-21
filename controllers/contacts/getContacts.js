const { Contact } = require('../../model/contact');

const getContacts = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const result = await Contact.find(
      { owner: _id },
      { skip: +skip, limit: +limit }
    ).populate('owner', '_id email');

    res.json({ status: 'success', code: 200, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
