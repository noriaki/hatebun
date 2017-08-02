import getRss from './getRss';

const getEntryList = async (category) => {
  const target = category === 'hotentry' ? '?mode=' : `/${category}.`;
  const uri = `http://b.hatena.ne.jp/hotentry${target}rss`;
  return (await getRss(uri)).feed.entries;
};

export default getEntryList;
