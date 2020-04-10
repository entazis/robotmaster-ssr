import React from "react";

export default function () {

  const handleClick = () => {
    window.ga("send", "pageview", "/social-page-clicked-side");
  };

  return (
      <div className='social-actions'>
        <a href="https://www.facebook.com/robotmasterolp"
           onClick={() => handleClick()}
           data-eventid='facebook'>
          <i className="fa fa-facebook-square"/>
        </a>
        <a href="https://www.instagram.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='instagram'>
          <i className="fa fa-instagram"/>
        </a>
        <a href="https://www.twitter.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='twitter'>
          <i className="fa fa-twitter"/>
        </a>
        <a href="https://www.youtube.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='youtube'>
          <i className="fa fa-youtube-play"/>
        </a>
        <a href="https://www.linkedin.com/company/robotmaster-"
           onClick={() => handleClick()}
           data-eventid='linkedin'>
          <i className="fa fa-linkedin-square"/>
        </a>
      </div>
  );
}