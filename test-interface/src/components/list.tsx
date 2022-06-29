/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import Card from './card';

/* eslint-disable react/jsx-filename-extension */
function List() {
  const [company, setCompany] = useState('nntada');
  return (
    <div>
      <Card cmp={company} />
      <div onClick={() => setCompany('everis')}>button</div>
    </div>
  );
}
export default List;
