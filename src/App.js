import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import './App.css';
import Layout from "./client/layouts/layout";
import NotFound from './client/not-found';

import Test from './client/test-page';

import messages_cs from './localization/cs.json';
import messages_de from './localization/de.json';
import messages_en from './localization/en.json';
import messages_es from './localization/es.json';
import messages_fi from './localization/fi.json';
import messages_fr from './localization/fr.json';
import messages_ja from './localization/ja.json';
import messages_pt from './localization/pt.json';
import messages_tr from './localization/tr.json';
import messages_zh from './localization/zh.json';



function App() {
  const language = 'en';

  const messages = {
    'cs': messages_cs,
    'de': messages_de,
    'en': messages_en,
    'es': messages_es,
    'fi': messages_fi,
    'fr': messages_fr,
    'ja': messages_ja,
    'pt': messages_pt,
    'tr': messages_tr,
    'zh': messages_zh
  };

  return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/:language/about" component={''} />
              <Route path="/:language/applications" component={''}/>
              <Route path="/:language/contact" component={''} />
              <Route path="/:language/newsroom" component={''} />
              <Route path="/:language/events" component={''} />
              <Route path="/:language/products" component={''} />
              <Route path="/:language/why-robotmaster" component={''} />
              <Route path="/:language/success-stories" component={''} />
              <Route path="/:language/privacy" component={''} />
              <Route path="/:language/disclaimer" component={''}/>
              <Route path="/:language/eula" component={''} />
              <Route path="/:language/gdpr" component={''} />
              <Route path="/:language/partners" component={''} />
              <Route path="/:language/not-found" component={NotFound} />
              <Route path="/:language" exact component={Test}/>
              <Redirect to="/en"/>
            </Switch>
          </Layout>
        </div>
      </IntlProvider>
  );
}

export default App;
