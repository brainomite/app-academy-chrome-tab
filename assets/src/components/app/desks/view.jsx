import React from 'react';

const pairSpan = pair => {
  const students = []

  pair.forEach((student, idx) => {;
    students.push(studentLink(student));

    if (idx < pair.length - 1) {
      students.push(' & ');
    }
  });

  return (
    <span className="pair">{ students }</span>
  )
}

const studentLink = ({ github, name }) => {
  const key = `link-${github}`,
        url = `https://github.com/${github}`;

  return (<a href={ url } key={ key }>{ name }</a>);
}

const deskPairLi = (desk, pair, idx) => (
  <li key= { `pair-${idx}` }>
    <strong>{ desk }</strong> - { pairSpan(pair) }
  </li>
)

const desksPairList = pod => {
  if (!pod) { return; }

  const pairs = [],
        desks = Object.getOwnPropertyNames(pod.pairs);

  desks.forEach((desk, idx) => {
    pairs.push(deskPairLi(desk, pod.pairs[desk], idx));
  });

  return (
    <ul>
      { pairs }
    </ul>
  );
}

const className = visible => (
  visible ? 'is-active' : ''
);

const wrapLi = (body, idx) => (
  <li key={ idx }>{ body }</li>
);

const podName = pod => {
  if (!pod) { return; }

  return <h2>{ pod.name }</h2>
}

export default ({ hideDesks, day, visible, podId, pods }) => (
  <article className={ className(visible) } id="desks">
    <span onClick={ hideDesks }>×</span>
    <h1>{ day } Desks</h1>
    { podName(pods[podId]) }
    { desksPairList(pods[podId]) }
  </article>
)
