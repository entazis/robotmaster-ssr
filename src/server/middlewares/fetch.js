import { matchRoutes } from "react-router-config";

import Routes from '../../routes';
import fs from "fs";
import marked from "marked";

const posts = JSON.parse(fs.readFileSync('src/blog/posts.json'));
posts.forEach(function(post) {
  if (typeof post.altLink === "undefined") {
    post.content = marked(fs.readFileSync("src/blog/" + post.content, {
      encoding: "utf8"
    }));
  }
  post.summary = marked(fs.readFileSync("src/blog/" + post.summary, {
    encoding: "utf8"
  }));
});

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
