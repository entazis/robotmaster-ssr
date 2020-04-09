import React from 'react';

export default function (props) {
  let dataFromFetch = [];

  if (props.staticContext && props.staticContext.data) {
    dataFromFetch = props.staticContext.data
  }

  return (
      <div className={'test-class'}>
        <p>Hello test!</p>
        <ul>
          {dataFromFetch.map(item => <li key={item.id}>item.title</li>)}
        </ul>
      </div>
  );
}