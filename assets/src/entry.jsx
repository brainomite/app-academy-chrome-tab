import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app.jsx';

const render = () => ReactDom.render(<App />, document.querySelector('#app'));

document.addEventListener("DOMContentLoaded", render);