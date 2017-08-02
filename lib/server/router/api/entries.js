import resource from 'resource-router-middleware';

import getRss from '../../getRss';

const categories = ['it'];

export default () => resource({
  id: 'category',

  load: (req, id, callback) => {
    const err = categories.includes(id) ? null : 'not found';
    callback(err, id);
  },

  read: async ({ category }, res) => {
    const uri = `http://b.hatena.ne.jp/hotentry/${category}.rss`;
    const entries = (await getRss(uri)).feed.entries;
    res.json(entries);
  },
});
