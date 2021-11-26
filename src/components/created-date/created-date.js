import React, { Component } from 'react';
import './created-date.css';

import { formatDistanceToNow } from 'date-fns';

export default class CreatedDate extends Component {
  render() {
    const { created } = this.props;
    return (
      <span className="created">
        {formatDistanceToNow(created, { includeSeconds: true })}
      </span>
    );
  }
}
