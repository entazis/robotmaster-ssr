import React, {Component} from 'react';
import Topbar from "./topbar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import SocialPages from "./social-pages";

export default class Layout extends Component {
  render() {
    return (
        <div className={'layout'}>
          <Topbar/>
          <Navbar/>
          {this.props.children}
          <Footer/>
          <SocialPages/>
        </div>
    );
  }
}
