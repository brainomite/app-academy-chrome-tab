import React from 'react';
import { sample } from 'lodash';

const pairSpan = pair => {
  const students = []

  pair.forEach((student, idx) => {;
    students.push(student.name);

    if (idx < pair.length - 1) {
      students.push(' & ');
    }
  });

  return (
    <span className="pair">{ students }</span>
  )
};

const studentLink = ({ github, name }) => {
  const key = `link-${github}`,
        url = `https://github.com/${github}`;

  return (<a href={ url } key={ key }>{ name }</a>);
};

const deskPairLi = (desk, pair, idx, set) => (
  <li key= { `pair-${idx}` } className="student-pair" onClick={ () => { set(desk) } }>
    <strong>{ desk }</strong> - { pairSpan(pair) }
  </li>
);

const desksPairList = (pod, set) => {
  if (!pod) { return; }

  const pairs = [],
        desks = Object.getOwnPropertyNames(pod.pairs);

  desks.forEach((desk, idx) => {
    pairs.push(deskPairLi(desk, pod.pairs[desk], idx, set));
  });

  return (
    <ul>
      { pairs }
    </ul>
  );
};

const className = visible => (
  visible ? 'desks is-active' : 'desks'
);

const wrapLi = (body, idx) => (
  <li key={ idx }>{ body }</li>
);

const podName = pod => {
  if (!pod) { return; }

  return <h2>{ pod.name }</h2>
};

const createClass = halloweenImg => (
  halloweenImg ? 'img-active' : 'hidden'
);

const randImg = () => {
  const images = [
    "https://i.pinimg.com/originals/b5/08/e8/b508e815e0831481dde2f92fffc5b306.jpg",
    "https://i.pinimg.com/originals/b7/4d/71/b74d7151e73389219b3f4a7aef5ef1db.jpg",
    "http://residencestyle.com/wp-content/uploads/2016/07/Scary-Halloween-Decorations.jpg",
    "https://i.pinimg.com/originals/f4/5d/0d/f45d0d44721bc60752bdac33ac7245c2.jpg",
    "https://wallpapercave.com/wp/Th353Y7.jpg",
    "https://wallpapercave.com/wp/TCBVAqT.jpg",
    "https://wallpapercave.com/wp/UdVWVnw.jpg",
    "https://wallpapercave.com/wp/5LJOQCX.jpg",
    "https://wallpapercave.com/wp/NmYbTgm.jpg",
    "https://wallpapercave.com/wp/MltA89Q.jpg",
    "https://wallpapercave.com/wp/f61ztEM.jpg",
    "https://wallpapercave.com/wp/5aHS2is.jpg",
    "https://wallpapercave.com/wp/wp2471819.jpg",
    "https://wallpapercave.com/wp/wp2471825.jpg",
    "https://sc02.alicdn.com/kf/HTB12x_.KVXXXXcTXXXXq6xXFXXXp.jpg",
    "https://images.pond5.com/binary-codes-background-loopable-footage-023456491_prevstill.jpeg",
    "https://c.pxhere.com/photos/a6/a8/eyes_cat_halloween_black_luck_bad_dark_animal-1004605.jpg!d",
    "https://i.ytimg.com/vi/36wqslpD9-U/maxresdefault.jpg",
    "assets/img/recursion.png",
    "assets/img/failed_spec.png",
    "assets/img/error.jpg",
  ];
  return sample(images);
};

export default ({ hideDesks, day, visible, podId, pods, set, halloweenImg }) => (
  <section className="section">
    <img
      className={ createClass(halloweenImg) } src={ randImg() }>
    </img>
    <article className={ className(visible) }>
      <span onClick={ hideDesks }>×</span>
      <h1>{ day } Desks</h1>
      { podName(pods[podId]) }
      { desksPairList(pods[podId], set) }
    </article>
  </section>
);
