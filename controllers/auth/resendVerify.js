const { NotFound, BadRequest } = require('http-errors');
const sendMail = require('../../helpers/sendEmail');
const { verifyJoiSchema, User } = require('../../model/auth');

const resendVerify = async (req, res, next) => {
  const { email: userEmail } = req.body;

  try {
    const { error } = verifyJoiSchema.validate(userEmail);

    if (error) {
      error.status = 400;
      throw error;
    }

    const user = await User.findOne({ userEmail });

    if (!user) {
      throw new NotFound('There is no user with such email');
    }

    if (user.verify) {
      throw new BadRequest('Verification has already been passed');
    }

    const verificationMail = {
      to: user.email,
      subject: 'Verify you account on Phonebook app',
      html: `<a href='https://localhost:3000/api/users/verify/${user.verficationToken}' target="_blank">Click to verify your token<a>`,
    };

    await sendMail(verificationMail);

    res.json({ message: 'Verification email sent' });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerify;
