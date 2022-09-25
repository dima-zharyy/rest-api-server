const { User } = require('../../model/auth');
const path = require('path');
const fs = require('fs/promises');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const setAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imgName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, imgName);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join('public', 'avatars', imgName);
    const userId = req.user._id;

    await User.findByIdAndUpdate(userId, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = setAvatar;
