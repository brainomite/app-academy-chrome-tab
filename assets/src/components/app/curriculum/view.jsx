import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ getCode, curriculum }) => {

  if (curriculum) {
    return <ReactMarkdown source={ curriculum } />;
  } else {
    return (
      <div className="curriculum">
        <h1 onClick={ getCode }>Sign in to Github to view the daily curriculum.</h1>
      </div>
    );
  }
}
  
