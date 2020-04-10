import React from "react";
import {FormattedMessage} from "react-intl";
import { Carousel } from 'react-bootstrap';

import './home.css';
import Ribbon from './ribbon/ribbon';
import Banner from "../ui/banner";

const slides = [
  'slideshow-img-1',
  'slideshow-img-2',
  'slideshow-img-3',
  'slideshow-img-4',
  'slideshow-img-5',
  'slideshow-img-6',
  'slideshow-img-7',
];

export default function () {
  const slideUrls = slides.map(function(id) {
    return <FormattedMessage id={id}/>
  });

  return (
      <div className="home">
        <Banner />
        <div className="container slideshow">
          <Carousel>
            {slideUrls.map(url => {
              return (
                  <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={url}
                        alt="slide"
                    />
                    <Carousel.Caption>
                      <h3>Slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
        <Ribbon/>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <h1>
                <FormattedMessage id='home-heading-1-part-1'/>
              </h1>
              <h1>
                <strong>
                  <FormattedMessage id='home-heading-1-part-2'/>
                </strong>
              </h1>
              <p>
                <FormattedMessage id='home-section-1-para'/>
              </p>
              <ul>
                <li>
                  <FormattedMessage id='home-section-1-listitem-1'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-1-listitem-2'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-1-listitem-3'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-1-listitem-4'/>
                </li>
              </ul>
              <a href="products">
                <FormattedMessage id='general-learn-more-dotted'/>
              </a>
            </div>
            <div className="col-md-5">
              <img className="img-responsive" src="/img/screenshot-1.png" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <h1>
                <FormattedMessage id='home-heading-2-part-1'/>
              </h1>
              <h1>
                <strong>
                  <FormattedMessage id='home-heading-2-part-2'/>
                </strong>
              </h1>
              <p>
                <FormattedMessage id='home-section-2-para'/>
              </p>
              <a href="why-robotmaster">
                <FormattedMessage id='general-learn-more-dotted'/>
              </a>
            </div>
            <div className="col-md-5">
              <ul>
                <li>
                  <FormattedMessage id='home-section-2-listitem-1'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-2-listitem-2'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-2-listitem-3'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-2-listitem-4'/>
                </li>
                <li>
                  <FormattedMessage id='home-section-2-listitem-5'/>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <h1>
                <strong>
                  <FormattedMessage id='home-heading-3'/>
                </strong>
              </h1>
              <p>
                <FormattedMessage id='home-section-3-para'/>
              </p>
              <a href="applications">
                <FormattedMessage id='general-learn-more-dotted'/>
              </a>
            </div>
            <div className="col-md-5">
              <img className="spacer img-responsive" src="/img/screenshot-2.png" />
            </div>
          </div>
        </div>
        <div className="revolution">
          <img className="background hidden-sm hidden-xs" src="/img/r.svg" />
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-offset-1">
                <img className="tagline" src="/img/revolution.svg" />
              </div>
              <div className="col-md-5 hidden-sm hidden-xs">
                <img className="robot-evolution" src="/img/robot-evolution.png" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <p>
                  <FormattedMessage id='home-section-4-para'/>
                </p>
                <a href="why-robotmaster">
                  <FormattedMessage id='general-learn-more-dotted'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}