const yup = require('yup');
var ObjectId = require('mongoose').Types.ObjectId;

class JobValidations {
  static getAllJobs() {
    return yup.object().shape({
      query: yup.object().shape({
        page: yup.number().integer().min(0).nullable(),
        limit: yup.number().integer().min(1).nullable(),
        status: yup
          .string()
          .oneOf([
            'active',
            'inactive',
            'assigned',
            'completed',
            'cancelled',
            'deleted',
          ])
          .nullable(),
        search: yup.string().nullable(),
      }),
    });
  }

  static getJobById() {
    return yup.object().shape({
      params: yup.object().shape({
        id: yup
          .string()
          .required()
          .test('ObjectId', 'Invalid id', (value) => {
            return ObjectId.isValid(value);
          }),
      }),
    });
  }

  static createJob() {
    return yup.object().shape({
      body: yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        category: yup
          .string()
          .required('Category is required')
          .test('ObjectId', 'Invalid id', (value) => {
            return ObjectId.isValid(value);
          }),
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
        id: yup
          .string()
          .required()
          .test('ObjectId', 'Invalid id', (value) => {
            return ObjectId.isValid(value);
          }),
      }),
      body: yup.object().shape({
        title: yup.string(),
        description: yup.string(),
        category: yup.string().test('ObjectId', 'Invalid id', (value) => {
          return ObjectId.isValid(value);
        }),
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
        id: yup
          .string()
          .required()
          .test('ObjectId', 'Invalid id', (value) => {
            return ObjectId.isValid(value);
          }),
      }),
    });
  }
}

module.exports = JobValidations;
