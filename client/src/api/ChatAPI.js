import BaseRoutes from './BaseRoutes';

class ChatApi extends BaseRoutes {
  constructor() {
    super('/chats');
  }

  createChat = async (users) => {
    return await this._post('', { users });
  };

  getChats = async () => {
    return await this._get('');
  };

  getChat = async (id) => {
    return await this._get(`/${id}`);
  };

  addTextMessage = async ({ id, text }) => {
    return await this._post(`/${id}/text`, { text });
  };

  addReferenceMessage = async ({ id, text, job }) => {
    return await this._post(`/${id}/reference`, { text, job });
  };
}

export default new ChatApi();
