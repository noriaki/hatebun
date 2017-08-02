import React from 'react';

import getEntryList from '../lib/getEntryList';
import EntryList from '../components/EntryList';

const IndexPage = ({ entries }) => (
  <EntryList entries={entries} />
);
IndexPage.getInitialProps = async ({ req }) => {
  const isServer = Boolean(req);
  const entries = await getEntryList(isServer, 'it');
  return { entries };
};

export default IndexPage;
