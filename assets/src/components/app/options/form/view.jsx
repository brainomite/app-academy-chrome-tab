import React from 'react';

// Radio button's 'onChange={ () => {} }' is there to supress React's unnecessary warning
export default ({ cityId, setCityId, podId, setPodId, desk, setDesk, pods, setPassword }) => (
  <form action="#">

    <h1>Options</h1>

    <div className="input">
      <div className="label">Location</div>
      <div id="input-location" onChange={ dispatchChange(setCityId) }>
        <label>
          <input
            type="radio"
            htmlName="location"
            value="1"
            onChange={ () => {} }
            checked={ cityId == 1 } /> NYC
        </label>
        <label>
          <input
            type="radio"
            htmlName="location"
            value="2"
            onChange={ () => {} }
            checked={ cityId == 2 } /> SF
        </label>
      </div>
    </div>

    <div className="input">
      <label htmlFor="select-pod">Pod</label>
      <select id="select-pod" 
        value={ podId }
        onChange={ dispatchChange(setPodId) }>
        { podOptions(pods) }
      </select>
    </div>

    <div className="input">
      <label htmlFor="input-desk">Desk</label>
      <select id="select-pod" 
        value={ desk }
        onChange={ dispatchChange(setDesk) }>
        { deskOptions(pods[podId] ? pods[podId].pairs : []) }
      </select>
    </div>

    <div className="input">
      <label htmlFor="input-password">Password</label>
      <input
        type="password"
        id="input-password"
        onChange={ dispatchChange(setPassword) } />
    </div>

  </form>
)

const dispatchChange = dispatch => e => {
  dispatch(e.target.value);
}

const podOptions = pods => Object.keys(pods).map(podId => (
  <option value={ podId } key={ podId }>{ pods[podId] && pods[podId].name }</option>
))

const deskOptions = desks => Object.keys(desks).map(deskNum => (
  <option value={ deskNum } key={ deskNum }>{ deskNum }</option>
))
