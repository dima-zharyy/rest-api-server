const { Conflict } = require('http-errors');
const { User } = require('../../model/auth');

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw new Conflict('Email in use');
    }

    const result = await User.create({ email, password });

    res.status(201).json({ status: 'success', code: 201, data: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
