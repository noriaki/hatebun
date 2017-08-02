import React from 'react';

const EntryList = ({ entries }) => (
  <ul>
    {entries.map(entry => (
      <li key={entry.link}>
        <a href={entry.link}>{entry.title}</a>
      </li>
    ))}
  </ul>
);

export default EntryList;
