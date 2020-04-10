import React from "react";
import { FormattedMessage } from "react-intl";

import './about.css';
import Banner from '../ui/banner';

const timelineYears = [
  {
    year: '2002',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2003',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2004',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2005',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2008',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2011',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2013',
    tallImg: true,
    parts: ['1', '2'],
  },
  {
    year: '2014',
    tallImg: false,
    parts: ['1'],
  },
  {
    year: '2015',
    tallImg: true,
    parts: ['1', '2'],
  },
];

export default function (props) {
  console.log(props.match.params.lan);
  return (
      <div className="about">
        <Banner imageIndex={4}/>
        <h2 id="our-story" className="subtitle">
          <FormattedMessage id='about-title-1'/>
        </h2>
        <div className="row bigger-page-text">
          <div className="col-md-6 col-lg-6">
            <p className="leading-paragraph">
              <FormattedMessage id='about-story-1'/>
            </p>
            <p>
              <FormattedMessage id='about-story-2'/>
            </p>
            <p>
              <FormattedMessage id='about-story-3'/>
            </p>
            <p>
              <FormattedMessage
                  id="about-story-4"
                  values={{
                    roboticMachining:
                        <a href={'/' + props.match.params.lan + '/applications/machining'}>
                          robotic machining
                        </a>,
                  }} />
            </p>
            <p>
              <FormattedMessage id='about-story-5'/>
            </p>
            <p>
              <FormattedMessage id='about-story-6'/>
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            {timelineYears.map(function(data) {
              return (
                  <div className="timeline-item clearfix" key={data.year}>
                    <div className="timeline-img">
                      <img src={'/img/about/' + data.year + '.png'} alt={data.year} />
                    </div>
                    <div
                        className={'timeline-desc' + (data.tallImg ?
                            ' double' : '')}>
                      <p>
                  <span className="year">
                    {data.year}
                  </span>
                        <br />
                        <span className="flavor">
                    {data.parts.map(function(part) {
                      return (
                          <FormattedMessage id={'about-flavor-' + data.year + '-' + part}/>
                      );
                    })}
                  </span>
                      </p>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>,
        <h2 id="our-team" className="subtitle">
          <FormattedMessage id='about-title-2'/>
        </h2>,
        <div className="row bigger-page-text">
          <div className="col-md-12 col-lg-12">
            <p className="leading-paragraph">
              <FormattedMessage id='about-team-1'/>
            </p>
          </div>
        </div>,
        <div className="row bigger-page-text" style={{marginBottom: '20px'}}>
          <div className="col-md-7 col-lg-7">
            <p>
              <FormattedMessage id='about-team-2'/>
            </p>
          </div>
          <div className="col-md-5 col-lg-5 flex-center-img">
            <img src="/img/about/1.png" style={{maxWidth: '60%', maxHeight: '240px'}} />
          </div>
        </div>,
        <div className="row bigger-page-text" style={{marginBottom: '20px'}}>
          <div
              className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-md-push-5 col-lg-push-5">
            <p>
              <FormattedMessage id='about-team-3'/>
            </p>
          </div>
          <div
              className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-pull-7 col-lg-pull-7 flex-center-img">
            <img src="/img/about/2.png" style={{maxWidth: '60%', maxHeight: '240px'}} />
          </div>
        </div>,
        <div className="row bigger-page-text" style={{marginBottom: '20px'}}>
          <div className="col-md-7 col-lg-7">
            <p style={{marginTop: '20px'}}>
              <FormattedMessage id='about-team-4'/>
            </p>
          </div>
          <div className="col-md-5 col-lg-5 flex-center-img">
            <img src="/img/about/3.png" style={{maxWidth: '60%', maxHeight: '240px'}} />
          </div>
        </div>,
        <div className="row bigger-page-text" style={{marginBottom: '20px'}}>
          <div
              className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-md-push-5 col-lg-push-5">
            <p>
              <FormattedMessage id='about-team-5'/>
            </p>
          </div>
          <div
              className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-pull-7 col-lg-pull-7 flex-center-img">
            <img src="/img/about/4.png" style={{maxWidth: '60%', maxHeight: '240px'}} />
          </div>
        </div>
      </div>
  );
}