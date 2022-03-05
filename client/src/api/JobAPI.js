import BaseRoutes from './BaseRoutes';

class JobAPI extends BaseRoutes {
  constructor() {
    super('/jobs');
  }

  getJobs = async () => {
    const res = await this._get('/');

    return res;
  };

  getJob = async (id) => {
    const res = await this._get(`/${id}`);

    return res;
  };

  createJob = async (data) => {
    const res = await this._post('/', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res;
  };

  updateJob = async (id, data) => {
    const res = await this._put(`/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res;
  };

  assignJob = async (id, assignedTo) => {
    const res = await this._put(`/${id}`, {
      assignedTo,
      isAssigned: true,
    });

    return res;
  };

  completeJob = async (id) => {
    const res = await this._put(`/${id}`, {
      isCompleted: true,
    });

    return res;
  };

  cancelJob = async (id) => {
    const res = await this._put(`/${id}`, {
      isCancelled: true,
    });

    return res;
  };

  deactivateJob = async (id) => {
    const res = await this._put(`/${id}`, {
      isActive: false,
    });

    return res;
  };

  deleteJob = async (id) => {
    const res = await this._remove(`/${id}`);

    return res;
  };
}

export default new JobAPI();
