import { createClient } from '../promisedFlashheart';

const client = createClient();

const getEntryList = category => client.get(`/api/entries/${category}`);

export default getEntryList;
