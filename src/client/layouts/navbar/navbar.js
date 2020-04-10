import React from "react";

import './navbar.css';
import {FormattedMessage} from "react-intl";

export default function (props) {
  const createLink = (url, caption) => {
    const className = (url === props.path) ? 'active' : null;
    return (
        <li className={className}>
          <a href={url}>
            {caption}
          </a>
        </li>
    );
  };

  return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example">
              <span className="sr-only">
                <FormattedMessage id='navbar-toggle-nav'/>
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href>
              <div className="logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example">
            <ul className="nav navbar-nav">
              {createLink('about',
                  <FormattedMessage id='about-page-caption'/>)}
              {createLink('products',
                  <FormattedMessage id='products-page-caption'/>)}
              {createLink('applications',
                  <FormattedMessage id='application-page-caption'/>)}
              {createLink('why-robotmaster',
                  <FormattedMessage id='why-page-caption'/>)}
              {createLink('success-stories',
                  <FormattedMessage id='success-page-caption'/>)}
              {createLink('partners',
                  <FormattedMessage id='partners-page-caption'/>)}
            </ul>
          </div>
        </div>
      </nav>
  );
}