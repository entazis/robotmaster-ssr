import React from 'react';

export default function (props) {

  let dataFromFetch = null;
  if (props.staticContext && props.staticContext.data) {
    dataFromFetch = props.staticContext.data
  }

  return (
      <div className={'test-class'}>
        <p>Hello test!</p>
        <ul>
          test-data
        </ul>
      </div>
  );
}