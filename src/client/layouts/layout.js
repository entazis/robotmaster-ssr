import React, {Component} from 'react';
import Topbar from "../ui/topbar";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import SocialPages from "../ui/social-pages";

export default class Layout extends Component {
  render() {
    return (
        <div className={'layout'}>
          <Topbar/>
          <Navbar path={this.props.path}/>
          {this.props.children}
          <Footer/>
          <SocialPages/>
        </div>
    );
  }
}
