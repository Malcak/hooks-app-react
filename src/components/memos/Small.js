import React from 'react';

export const Small = React.memo(({ value }) => {
  console.log('I am being called again');
  return <small>{value}</small>;
});
