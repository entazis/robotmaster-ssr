import React from 'react';
import { renderRoutes } from "react-router-config";
import { Switch} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Routes from './shared/routes';
import './App.css';
import Layout from "./client/layouts/layout";

import messages_cs from './localization/cs/pages.json';
import messages_de from './localization/de/pages.json';
import messages_en from './localization/en/pages.json';
import messages_es from './localization/es/pages.json';
import messages_fi from './localization/fi/pages.json';
import messages_fr from './localization/fr/pages.json';
import messages_ja from './localization/ja/pages.json';
import messages_pt from './localization/pt/pages.json';
import messages_tr from './localization/tr/pages.json';
import messages_zh from './localization/zh/pages.json';

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
              {renderRoutes(Routes)}
            </Switch>
          </Layout>
        </div>
      </IntlProvider>
  );
}

export default App;
