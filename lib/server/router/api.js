import { Router } from 'express';
import entries from './api/entries';

export default () => {
  const api = Router();

  api.use('/entries', entries());

  return api;
};
