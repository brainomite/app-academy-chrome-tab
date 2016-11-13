import React from 'react';

const podLis = pods => {
  const keys = Object.keys(pods);

  return keys.map(id => {
    const pod = pods[id];

    return <li key={ id }>{ pod.name }</li>
  });
}

export default ({ pods }) => (
  <ul>
    { podLis(pods) }
  </ul>
)