import React from "react";

const banners = [
  '/img/banner-00.jpg',
  '/img/banner-01.jpg',
  '/img/banner-02.jpg',
  '/img/banner-03.jpg',
  '/img/banner-04.jpg',
];

export default function(props) {
  return (
      <div className="banner">
        <div
            className="img-container"
            style={{
              backgroundImage: 'url(' + banners[props.imageIndex] + ')',
            }} />
        <div className={'hidden-xs' + (props.caption ? ' caption' : '')}>
          {props.caption}
        </div>
      </div>
  );
}