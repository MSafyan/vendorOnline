const User = require('../models/user.model');
const removeFiles = require('../utils/removeFiles');
const uploadFiles = require('../utils/uploadFiles');

class UserController {
  static async updateProfile(req, res) {
    try {
      const profileImage = req.files?.profileImage;

      if (profileImage) {
        const oldProfile = await User.findById(req.user._id);
        if (oldProfile.profileImage) {
          removeFiles(oldProfile.profileImage);
        }

        const imagePath = uploadFiles(profileImage, 'users');
        req.body.profileImage = imagePath;
      }

      const user = await User.findByIdAndUpdate(req.user._id, req.body, {
        new: true,
        runValidators: true,
      });

      return res.status(200).json({
        message: 'Profile updated!',
        data: user.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async getProfile(req, res) {
    try {
      const user = await User.findById(req.user._id);

      return res.status(200).json({
        // message: 'Profile retrieved!',
        data: user.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = UserController;
