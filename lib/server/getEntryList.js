import getRss from './getRss';

const getEntryList = async (category) => {
  const uri = `http://b.hatena.ne.jp/hotentry/${category}.rss`;
  return (await getRss(uri)).feed.entries;
};

export default getEntryList;
