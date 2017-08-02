import getEntryListFromServer from './server/getEntryList';
import getEntryListFromClient from './client/getEntryList';

const getEntryList = (isServer, category) => (
  isServer ?
    getEntryListFromServer(category) :
    getEntryListFromClient(category)
);

export default getEntryList;
