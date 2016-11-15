import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ getCode, curriculum }) => {
  if (curriculum) {
    return (
      <div className="curriculum">
        <ReactMarkdown source={ curriculum } />;
      </div>
    );
  } else {
    return (
      <div className="curriculum">
        <h1 onClick={ getCode }>
          <span className="active" onClick={ getCode }>Sign in to Github</span><br /> 
          to view the daily curriculum.
        </h1>
      </div>
    );
  }
}
