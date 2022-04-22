import React from 'react';
import Cardd from './Cardd';
import CardAray from './CardAray';

const ncard = (val) => {
  return (
    <>
      <Cardd
        key={val.Title}
        Title={val.Title}
        bold={val.bold}
        para={val.para}
      />
    </>
  )
};
const PutArray = () => {
  return (
    <>
      {CardAray.map(ncard)}
    </>
  )
};

export default PutArray;
