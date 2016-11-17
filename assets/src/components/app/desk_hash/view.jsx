import React from 'react';

const notify = () => chrome.notifications.create(
  'desk-hash-changed', 
  { 
    type: "basic", 
    title: "Desk Hash Updated", 
    message: "The desk hash has been updated.", 
    iconUrl: "/assets/img/app-academy-logo-chrome-48.png"
  }
);

const className = visible => (
  visible ? 'is-active desk-hash' : 'desk-hash'
);

const dispatchChange = dispatch => e => {
  dispatch(e.target.value);
}

const close = (setPassword, hideDeskHash) => e => {
  const input = document.getElementById("input-password");

  setPassword(input.value);
  input.value = "";
  hideDeskHash();
  notify();
}

export default ({ hideDeskHash, visible, setPassword }) => (
  <article className={ className(visible) }>
    <span onClick={ hideDeskHash }>×</span>
    <form action="#" onSubmit={ close(setPassword, hideDeskHash) }>

      <div className="input">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          id="input-password" />
      </div>

    </form>
  </article>
)
