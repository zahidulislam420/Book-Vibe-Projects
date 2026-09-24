import React from 'react';
import Books from './components/homepage/Books';
import Banner from './components/homepage/Banner';

const page = () => {
  return (
    <div>
      <Banner />
      <Books />
    </div>
  );
};

export default page;