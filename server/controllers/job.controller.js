const Job = require('../models/job.model');
const uploadFiles = require('../utils/uploadFiles');

class JobController {
  static async getAllJobs(req, res) {
    try {
      const { page, limit, status, search, createdBy } = req.query;

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

      if (createdBy) {
        jobsQuery.find({
          createdBy,
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
      const oldJob = await Job.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      });

      if (!oldJob) {
        return res.status(401).json({
          message: 'Unauthorized',
        });
      }

      const jobUpdate = req.body;

      // update values
      if (jobUpdate.isActive === false) {
        if (oldJob.isAssigned === true) {
          return res.status(400).json({
            message: 'Job is already assigned',
          });
        }

        jobUpdate.status = 'inactive';
      } else if (jobUpdate.isActive === true) {
        jobUpdate.status = 'active';
      } else if (jobUpdate.isAssigned === true) {
        if (oldJob.isAssigned === true) {
          return res.status(400).json({
            message: 'Job is already assigned',
          });
        }

        jobUpdate.isActive = false;
        jobUpdate.assignedAt = new Date();
        jobUpdate.status = 'assigned';
      } else if (jobUpdate.isCompleted === true) {
        if (oldJob.isCompleted === true) {
          return res.status(400).json({
            message: 'Job is already completed',
          });
        }
        if (oldJob.isAssigned === false) {
          return res.status(400).json({
            message: 'Job is not assigned',
          });
        }
        if (oldJob.isCanceled === true) {
          return res.status(400).json({
            message: 'Job is already canceled',
          });
        }
        if (oldJob.isDeleted === true) {
          return res.status(400).json({
            message: 'Job is already deleted',
          });
        }
        if (oldJob.isActive === false) {
          return res.status(400).json({
            message: 'Job is inactive',
          });
        }

        jobUpdate.isAssigned = false;
        jobUpdate.completedAt = new Date();
        jobUpdate.status = 'completed';
      } else if (jobUpdate.isCanceled === true) {
        if (oldJob.isCanceled === true) {
          return res.status(400).json({
            message: 'Job is already canceled',
          });
        }
        if (oldJob.isAssigned === false) {
          return res.status(400).json({
            message: 'Job is not assigned',
          });
        }
        if (oldJob.isCompleted === true) {
          return res.status(400).json({
            message: 'Job is already completed',
          });
        }

        jobUpdate.isAssigned = false;
        jobUpdate.canceledAt = new Date();
        jobUpdate.status = 'cancelled';
      } else if (jobUpdate.isDeleted === true) {
        if (oldJob.isDeleted === true) {
          return res.status(400).json({
            message: 'Job is already deleted',
          });
        }

        jobUpdate.isAssigned = false;
        jobUpdate.isActive = false;
        jobUpdate.deletedAt = new Date();
        jobUpdate.status = 'deleted';
      }

      const job = await Job.findByIdAndUpdate(req.params.id, jobUpdate, {
        new: true,
      })
        .populate('category')
        .populate('createdBy')
        .populate('assignedTo');

      return res.status(200).json({
        message: 'Job updated!',
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
