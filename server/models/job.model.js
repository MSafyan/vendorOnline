const mongoose = require('mongoose');

/**
 * @typedef Job
 * @property {string} _id
 * @property {string} title
 * @property {string} description
 * @property {string} company
 * @property {string} location
 * @property {string} budget
 * @property {string} status
 * @property {ObjectId} createdBy
 * @property {ObjectId} assignedTo
 * @property {ObjectId} category
 * @property {array} images
 * @property {Date} createdAt
 * @property {Date} assignedAt
 * @property {Date} completedAt
 * @property {Date} canceledAt
 * @property {Date} deletedAt
 * @property {Date} updatedAt
 * @property {boolean} isActive
 * @property {boolean} isAssigned
 * @property {boolean} isCompleted
 * @property {boolean} isCanceled
 * @property {boolean} isDeleted
 */

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 100,
    },
    company: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: [
        'active',
        'inactive',
        'assigned',
        'completed',
        'cancelled',
        'deleted',
      ],
      default: 'active',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    images: {
      type: Array,
      required: true,
    },
    assignedAt: {
      type: Date,
    },
    completedAt: {
      type: Date,
    },
    canceledAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAssigned: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isCanceled: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// set status and time for each status
JobSchema.pre('updateOne', function (next) {
  const job = this;

  if (job.getUpdate().$set.isActive === false) {
    if (job.isAssigned === true) {
      next('Job is already assigned');
    }

    job.getUpdate().$set.status = 'inactive';
  } else if (job.getUpdate().$set.isActive === true) {
    job.getUpdate().$set.status = 'active';
  } else if (job.getUpdate().$set.isAssigned === true) {
    if (job.isAssigned === true) {
      next('Job is already assigned');
    }

    job.getUpdate().$set.isActive = false;
    job.getUpdate().$set.assignedAt = new Date();
    job.getUpdate().$set.status = 'assigned';
  } else if (job.getUpdate().$set.isCompleted === true) {
    if (job.isCompleted === true) {
      next('Job is already completed');
    }
    if (job.isAssigned === false) {
      next('Job is not assigned');
    }
    if (job.isCanceled === true) {
      next('Job is canceled');
    }
    if (job.isDeleted === true) {
      next('Job is deleted');
    }
    if (job.isActive === false) {
      next('Job is inactive');
    }

    job.getUpdate().$set.isAssigned = false;
    job.getUpdate().$set.completedAt = new Date();
    job.getUpdate().$set.status = 'completed';
  } else if (job.getUpdate().$set.isCanceled === true) {
    if (job.isCanceled === true) {
      next('Job is already canceled');
    }
    if (job.isAssigned === false) {
      next('Job is not assigned');
    }
    if (job.isCompleted === true) {
      next('Job is completed');
    }

    job.getUpdate().$set.isAssigned = false;
    job.getUpdate().$set.canceledAt = new Date();
    job.getUpdate().$set.status = 'cancelled';
  } else if (job.getUpdate().$set.isDeleted === true) {
    if (job.isDeleted === true) {
      next('Job is already deleted');
    }

    job.getUpdate().$set.isAssigned = false;
    job.getUpdate().$set.isActive = false;
    job.getUpdate().$set.deletedAt = new Date();
    job.getUpdate().$set.status = 'deleted';
  }
  next();
});

// get job images with base url
JobSchema.methods.toJSON = function () {
  const job = this;
  const jobObject = job.toObject();

  jobObject.images = job.images.map((image) => {
    return process.env.BASE_URL + image;
  });

  return jobObject;
};

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;
