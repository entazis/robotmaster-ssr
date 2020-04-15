import { matchRoutes } from "react-router-config";

import Routes from '../../shared/routes';

const fetchMiddleware = () => async (req, res, next) => {
  const matchingRoutes = matchRoutes(Routes, req.url);

  const firstMatch = matchingRoutes[0].match;
  const routeObject = matchingRoutes[0].route;
  const lang = firstMatch.params.lang;
  const reqId = firstMatch.params.reqId;

  if (routeObject.loadData) {
    res.locals.data = await routeObject.loadData(lang, reqId);
  }

  next();
};

export default fetchMiddleware;
