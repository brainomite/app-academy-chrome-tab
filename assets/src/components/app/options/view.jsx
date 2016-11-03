import React from 'react';

import Form from './form/container';

const className = visible => (
  visible ? 'is-active' : ''
);

export default ({ hideOptions, visible }) => (
  <article className={ className(visible) } id="options">
    <span onClick={ hideOptions }>×</span>
    <Form />
  </article>
)
