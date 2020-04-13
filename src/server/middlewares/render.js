import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from "react-router-config";
import serialize from 'serialize-javascript';

import Routes from '../../routes';
import App from '../../App';
import utils from '../../helpers/utils';

const renderMiddleware = () => async (req, res) => {
  const matchingRoutes = matchRoutes(Routes, req.url);

  let data;
  if (matchingRoutes[0].route.loadData) {
    data = await matchingRoutes[0].route.loadData();
  }

  const context = { data };

  const htmlContent = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
      );

  let hrefLangs = '';
  const langUrls = utils.generateHreflangURLs("https", req.hostname, req.url);
  langUrls.forEach((lang) => {
    hrefLangs += `<link rel="alternate" href="${lang.href}" hreflang="${lang.hreflang}" />\n`
  });

  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
    LANG: matchingRoutes[0].match.params.lang,
    HREFLANGS: hrefLangs,
    TRACKING_ID: "UA-10169182-2",
    TITLE: req.meta ? req.meta.title : "Robotmaster CAD/CAM for robots (Off-Line Programming)",
    DESCRIPTION: req.meta ? req.meta.description : "",
    BANNER_CHOICE: utils.randomInt(0, 4)
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
    ).replace(
        '</body>',
        `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`);
  });

  res.send(html);
};

export default renderMiddleware;
