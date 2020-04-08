import React, { Component } from 'react';

export default class ContextProvider extends Component {
  static childContextTypes = {
    bannerChoice: React.PropTypes.number
  }

  getChildContext() {
    let localChoice = 0;
    if (typeof window !== 'undefined') {
      localChoice = window.__bannerChoice;
    }
    return {bannerChoice: this.props.bannerChoice || localChoice};
  }

  render() {
    return this.props.children;
  }
}
