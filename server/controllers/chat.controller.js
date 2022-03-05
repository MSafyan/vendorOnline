const Chat = require('../models/chat.model');
const Message = require('../models/message.model');

class ChatController {
  static async createChat(req, res) {
    try {
      const { users } = req.body;

      // if no exists with same users
      const chatCheck = await Chat.findOne({ users }).populate('users');

      if (chatCheck) {
        return res.status(200).json({
          data: chatCheck,
        });
      }

      const chat = await Chat.create({ users }).populate('users');

      res.status(201).json({
        data: chat,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async getChats(req, res) {
    try {
      const chats = await Chat.find({ users: req.user._id }).populate('users');

      // append only first message
      for (let i = 0; i < chats.length; i++) {
        const chat = chats[i];
        const message = await Message.findOne({ chat: chat._id })
          .sort({
            createdAt: -1,
          })
          .populate('sender');
        chat.messages = [message];
      }

      res.status(200).json({
        data: chats,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async getChat(req, res) {
    try {
      const chat = await Chat.findById(req.params.id).populate('users');

      chat.messages =
        (await Message.find({ chat: chat._id }).populate('sender')) || [];

      res.status(200).json({
        data: chat,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async addTextMessage(req, res) {
    try {
      const { text } = req.body;
      const message = await Message.create({
        text,
        sender: req.user._id,
        chat: req.params.id,
      });

      res.status(201).json({
        data: message,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async addReferenceMessage(req, res) {
    try {
      const { text, job } = req.body;
      const message = await Message.create({
        text,
        sender: req.user._id,
        chat: req.params.id,
        job,
        type: 'reference',
      });

      res.status(201).json({
        data: message,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = ChatController;