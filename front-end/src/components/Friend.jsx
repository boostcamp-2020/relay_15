import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
  return (
    <li>
      <Link to={`/main/${friend}`}>{friend}</Link>
    </li>
  );
};

export default Friend;
