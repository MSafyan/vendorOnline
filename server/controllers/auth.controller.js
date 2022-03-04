const User = require('../models/user.model');

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({
          message: 'User not found',
        });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return res.status(401).json({
          message: 'Wrong password',
        });
      }

      const token = await user.generateToken();

      // set token to httpOnly cookie and set maxAge to 1 year
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });

      return res.status(200).json({
        message: 'Login successful',
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          profileImage: user.profileImage,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async register(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user) {
        return res.status(409).json({
          message: 'User already exists',
        });
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();

      return res.status(201).json({
        message: 'User created successfully',
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = AuthController;
