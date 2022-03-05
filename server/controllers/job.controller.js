const Job = require('../models/job.model');
const uploadFiles = require('../utils/uploadFiles');

class JobController {
  static async getAllJobs(req, res) {
    try {
      const { page, limit, status, search } = req.query;

      const jobsQuery = Job.find({
        status: status ? status : { $ne: 'deleted' },
      })
        .populate('category')
        .populate('createdBy')
        .populate('assignedTo')
        .sort({ createdAt: -1 });

      if (page && limit) {
        jobsQuery.skip(parseInt(page) * parseInt(limit)).limit(parseInt(limit));
      }

      if (search) {
        jobsQuery.find({
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { location: { $regex: search, $options: 'i' } },
          ],
        });
      }

      const jobs = await jobsQuery.exec();

      return res.status(200).json({
        data: jobs.map((job) => job.toJSON()),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async getJobById(req, res) {
    try {
      const job = await Job.findById(req.params.id)
        .populate('category')
        .populate('createdBy')
        .populate('assignedTo');

      return res.status(200).json({
        data: job.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async createJob(req, res) {
    try {
      const images = req.files.images;

      const imagePaths = uploadFiles(images, `jobs/${req.user._id}`);
      req.body.images = imagePaths;

      req.body.createdBy = req.user._id;
      const job = await Job.create(req.body);

      return res.status(201).json({
        message: 'Job created!',
        data: job.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async updateJob(req, res) {
    try {
      // get job created by user is same as user who is updating job
      const jobCheck = await Job.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      });

      if (!jobCheck) {
        return res.status(401).json({
          message: 'Unauthorized',
        });
      }

      const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .populate('category')
        .populate('createdBy')
        .populate('assignedTo');

      return res.status(200).json({
        data: job.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  static async deleteJob(req, res) {
    try {
      // get job created by user is same as user who is updating job
      const jobCheck = await Job.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      });

      const job = await Job.findByIdAndUpdate(req.params.id, {
        isDeleted: true,
      });

      return res.status(200).json({
        data: job.toJSON(),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

module.exports = JobController;
