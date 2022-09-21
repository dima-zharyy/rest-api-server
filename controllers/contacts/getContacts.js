const { Contact } = require('../../model/contact');

const getContacts = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { page = 1, limit = 5 } = req.query;
    const skip = Number((page - 1) * limit);
    const limitNumber = Number(limit);

    const result = await Contact.find(
      { owner: _id },
      '_id name phone favorite',
      {
        skip: skip,
        limit: limitNumber,
      }
    );

    res.json({ status: 'success', code: 200, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
