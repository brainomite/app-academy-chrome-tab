import React from 'react';

const className = visible => (
  visible ? 'is-active desk-hash' : 'desk-hash'
);

const dispatchChange = dispatch => e => {
  dispatch(e.target.value);
}

export default ({ hideDeskHash, visible, setPassword }) => (
  <article className={ className(visible) }>
    <span onClick={ hideDeskHash }>×</span>
    <form action="#">

      <div className="input">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          id="input-password"
          onChange={ dispatchChange(setPassword) } />
      </div>

    </form>
  </article>
)
