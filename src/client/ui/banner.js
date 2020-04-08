import React, {Component} from "react";

const banners = [
  '/img/banner-01.jpg',
  '/img/banner-02.jpg',
  '/img/banner-03.jpg',
  '/img/banner-04.jpg',
  '/img/banner-05.jpg',
];

export default class Banner extends Component {
  render() {
    return (
        <div className="banner">
          <div
              className="img-container"
              style={{
                backgroundImage: 'url(' + (this.props.banner ||
                    banners[this.context.bannerChoice]) + ')',
              }} />
          <div className={'hidden-xs' + (this.props.caption ? ' caption' : '')}>
            {this.props.caption}
          </div>
        </div>
    );
  }
}