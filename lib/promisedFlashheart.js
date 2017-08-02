import { createClient as create } from 'flashheart';
import { promisifyAll } from './promisify';

export const createClient = (opts = {}) => promisifyAll(create(opts), [
  'get', 'head', 'post', 'put', 'patch', 'delete',
]);

export default { createClient };
