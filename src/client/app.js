import React, {Component} from 'react';
import Layout from './layouts/layout';
import Topbar from './ui/topbar';
import Navbar from './ui/navbar';
import Footer from './ui/footer';
import SocialPages from './ui/social-pages';
import { IntlProvider } from 'react-intl';

export default class App extends Component {
  render() {
    const currentLang = this.props.params.lang || 'en';

    let messages;
    switch (currentLang) {
      case 'cs':
        messages = require('../localization/cs/pages');
        break;
      case 'de':
        messages = require('../localization/de/pages');
        break;
      case 'en':
        messages = require('../localization/en/pages');
        break;
      case 'es':
        messages = require('../localization/es/pages');
        break;
      case 'fi':
        messages = require('../localization/fi/pages');
        break;
      case 'fr':
        messages = require('../localization/fr/pages');
        break;
      case 'ja':
        messages = require('../localization/ja/pages');
        break;
      case 'pt':
        messages = require('../localization/pt/pages');
        break;
      case 'tr':
        messages = require('../localization/tr/pages');
        break;
      case 'zh':
        messages = require('../localization/zh/pages');
        break;
      default:
        messages = require('../localization/en/pages');
    }

    return (
        <IntlProvider locale={currentLang} messages={messages}>
          <Layout>
            <Topbar currentLanguage={this.props.params.lang}/>
            <Navbar path={this.props.path}/>
            {this.props.children}
            <Footer/>
            <SocialPages/>
          </Layout>
        </IntlProvider>
    );
  }
}
