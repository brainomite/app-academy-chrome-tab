import React from 'react';

class CornerLink extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    )
  }
}

export default class extends React.Component {
  render() {
    var links = [];

    this.props.corners.forEach(function(link, index){
      var key = "corner-" + index;

      links.push(
        <CornerLink key={key} url={link.url} title={link.title} />
      );
    });

    return (
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    );
  }
}