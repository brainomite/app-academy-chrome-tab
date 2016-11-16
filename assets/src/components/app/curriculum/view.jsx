import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ getCode, readme }) => {
  if (readme) {
    return (
      <div className="curriculum">
        <div className="markdown-body">
          <ReactMarkdown source={ readme } />
        </div>
      </div>
    );
  } else {
    return (
      <div className="curriculum">
        <h1>
          <span className="active" onClick={ getCode }>Sign in to Github</span><br /> 
          to view the daily curriculum.
        </h1>
      </div>
    );
  }
}
