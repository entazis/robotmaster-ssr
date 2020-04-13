import React, { useState } from "react";
import {FormattedMessage} from "react-intl";
import { Carousel } from 'react-bootstrap';

import events from '../../../events.json';
import './ribbon.css';

export default function(props) {
  const [posts, setPosts] = useState([]);

  //FIXME: get /api/posts
  if (props.staticContext && props.staticContext.data) {
    const body = props.staticContext.data;
    setPosts(JSON.parse(body));
  }

  const getLatestNewsroomImgSrc = () => {
    if (posts) {
      if (typeof posts[0] !== 'undefined' &&
          typeof posts[0].home !== 'undefined' &&
          posts[0].home !== '') {
        return posts[0].home;
      } else if (typeof posts[0] !== 'undefined' &&
          typeof posts[0].preview !== 'undefined' &&
          posts[0].preview !== '') {
        return posts[0].preview;
      } else {
        return '';
      }
    }
  };

  return (
      <div className="container ribbon">
        <div className="row">
          <div className="col-md-6 col-sm-12 banner-slide-element fixed-image">
            <a href="newsroom">
              <div className="img-container">
                <img src={getLatestNewsroomImgSrc()} />
              </div>
            </a>
            <h2>
              <FormattedMessage id='ribbon-heading-3'/>
            </h2>
            <a href="newsroom">
              <FormattedMessage id='ribbon-desc-2'/>
            </a>
          </div>
          <div className="col-md-6 col-sm-12 banner-slide-element">
            <a href="events">
              <div className="img-container">
                <Carousel indicators={false}>
                  {events.filter(event => event.home).map(event => {
                    return (
                        <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={event.img}
                              alt="slide"
                          />
                        </Carousel.Item>
                    )
                  })}
                </Carousel>
              </div>
            </a>
            <h2>
              <FormattedMessage id='ribbon-heading-1'/>
            </h2>
            <a href="events">
              <FormattedMessage id='ribbon-desc-1'/>
            </a>
          </div>
        </div>
      </div>
  );
}