const { Contact, contactJoiSchema } = require('../../model/contact');

const addContact = async (req, res, next) => {
  try {
    const body = req.body;
    const { error } = contactJoiSchema.validate(body);

    if (error) {
      error.status = 400;
      throw error;
    }

    const result = await Contact.create(body);
    res.status(201).json({ status: 'success', code: 201, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
