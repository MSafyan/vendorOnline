const yup = require('yup');

class JobValidations {
  static getAllJobs() {
    return yup.object().shape({
      query: yup.object().shape({
        page: yup.number().integer().min(0).nullable(),
        limit: yup.number().integer().min(1).nullable(),
        status: yup
          .string()
          .oneOf(['pending', 'ongoing', 'completed', 'deleted'])
          .nullable(),
      }),
    });
  }

  static getJobById() {
    return yup.object().shape({
      params: yup.object().shape({
        id: yup.string().required(),
      }),
    });
  }

  static createJob() {
    return yup.object().shape({
      body: yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        category: yup.string().required('Category is required'),
        company: yup.string(),
        location: yup.string().required('Location is required'),
        budget: yup.string().required('Budget is required'),
        images: yup.array().of(yup.mixed()),
      }),
    });
  }

  static updateJob() {
    return yup.object().shape({
      params: yup.object().shape({
        id: yup.string().required(),
      }),
      body: yup.object().shape({
        title: yup.string(),
        description: yup.string(),
        category: yup.string(),
        company: yup.string(),
        location: yup.string(),
        budget: yup.string(),
        images: yup.array().of(yup.mixed()),
        isActive: yup.boolean(),
        isAssigned: yup.boolean(),
        isCompleted: yup.boolean(),
        isCanceled: yup.boolean(),
        isDeleted: yup.boolean(),
      }),
    });
  }

  static deleteJob() {
    return yup.object().shape({
      params: yup.object().shape({
        id: yup.string().required(),
      }),
    });
  }
}

module.exports = JobValidations;
