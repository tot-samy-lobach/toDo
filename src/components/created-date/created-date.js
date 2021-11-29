import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './created-date.css';

import { formatDistanceToNow } from 'date-fns';

export default class CreatedDate extends Component {
  static defaultProps = {
    created: new Date(),
  };

  static propTypes = {
    created: PropTypes.object,
  };

  console.log('test');
  render() {
    const { created } = this.props;
    return <span className="created">{formatDistanceToNow(created, { includeSeconds: true })}</span>;
  }
}
