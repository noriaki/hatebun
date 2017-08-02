import resource from 'resource-router-middleware';

import getEntryList from '../../getEntryList';

export default () => resource({
  id: 'category',

  load: (req, id, callback) => {
    const err = categories.includes(id) ? null : 'not found';
    callback(err, id);
  },

  read: async ({ category }, res) => {
    const entries = await getEntryList(category);
    res.json(entries);
  },
});

const categories = [
  'hotentry',
  'general',
  'social',
  'economics',
  'life',
  'knowledge',
  'it',
  'fun',
  'entertainment',
  'game',
];
