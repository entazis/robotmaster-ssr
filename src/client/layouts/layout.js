import React, {Component} from 'react';
import Topbar from "./topbar/topbar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import SocialPages from "./social-actions/social-actions";
import Banner from "./banner";

export default class Layout extends Component {
  render() {
    return (
        <div className={'layout'}>
          <Topbar/>
          <Navbar/>
          <Banner/>
          {this.props.children}
          <Footer/>
          <SocialPages/>
        </div>
    );
  }
}
