import fetch from 'isomorphic-fetch';
import { parseString } from 'rss-parser';
import { promisify } from '../promisify';

const promisedParseString = promisify(parseString);

const getRss = (url, fetchOpts, parserOpts = {}) => (
  fetch(url, fetchOpts)
    .then(response => response.text())
    .then(xml => promisedParseString(xml, parserOpts))
);

export default getRss;
