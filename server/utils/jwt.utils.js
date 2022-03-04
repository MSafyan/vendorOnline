import jwt from 'jsonwebtoken';
import setEnv from './setEnv';

setEnv();

const PRIVATE_KEY = process.env.PRIVATE_KEY?.replace(/\\n/g, '\n');
const PUBLIC_KEY = process.env.PUBLIC_KEY?.replace(/\\n/g, '\n');

export function sign(object, options) {
  if (!PRIVATE_KEY) return '';

  return jwt.sign(object, PRIVATE_KEY, {
    ...(options && options),
    algorithm: 'RS256',
  });
}

export function decode(token) {
  try {
    if (!PUBLIC_KEY) return { valid: false, expired: false, decoded: null };

    const decoded = jwt.verify(token, PUBLIC_KEY);

    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: jwt.decode(token),
    };
  }
}
