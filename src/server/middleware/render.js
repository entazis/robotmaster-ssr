import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from "react-router-config";
import Routes from '../../routes';

import App from '../../App';

const renderMiddleware = () => async (req, res) => {
  const matchingRoutes = matchRoutes(Routes, req.url);

  const data = [];
  for (const route of matchingRoutes) {
    if (route.loadData) {
      const temp = await route.loadData();
      console.log(route);
      data.push(temp);
    }
  }

  const context = { data };

  const htmlContent = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
      );
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
  };

  if (context.status === 404) {
    res.status(404);
  }
  if (context.url) {
    return res.redirect(301, context.url)
  }

  let html = req.html;
  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
