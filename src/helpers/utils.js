import * as fs from 'fs';
import path from 'path';
import marked from 'marked';
import languages from '../../localization/language-names.json';

const readSuccessStoriesDataSync = function(locales) {
  const returnData = {
    summary: {},
    fulltext: {}
  };

  const successStoriesData = JSON.parse(fs.readFileSync("../localization/success-stories.json"));

  locales.forEach(function(locale) {
    returnData.summary[locale] = {
      customer: [],
      media: []
    };
    returnData.fulltext[locale] = {};

    successStoriesData.forEach(function(story) {
      switch(story.type) {
        case "customer":
          returnData.summary[locale].customer.push({
            id: story.id,
            link: story.link,
            text: marked(fs.readFileSync("localization/"+ locale + "/success-stories/customer/" + story.id + "-summary.md", {
              encoding: "utf8"
            }))
          });

          returnData.fulltext[locale][story.id] = {
            id: story.id,
            text: marked(fs.readFileSync("localization/"+ locale + "/success-stories/customer/" + story.id + ".md", {
              encoding: "utf8"
            }))
          };
          break;
        case "media":
          returnData.summary[locale].media.push({
            id: story.id,
            link: story.link,
            text: marked(fs.readFileSync("localization/"+ locale + "/success-stories/media/" + story.id + "-summary.md", {
              encoding: "utf8"
            }))
          });
          break;
        default:
          break;
      }
    });
  });

  return returnData;
};

const getDirectoriesSync = function(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

const generateHreflangURLs = function(protocol, hostname, url) {
  const returnArr = [];
  let endPath = url.split("/");
  endPath.splice(0, 2);
  const urlPath = "/" + endPath.join("/");

  Object.keys(languages).forEach(function(lang) {
    if (languages[lang] !== '') {
      returnArr.push({
        href: protocol + "://" + hostname + "/" + lang + urlPath,
        hreflang: lang
      });
    }
  });

  return returnArr;
};

const randomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1))
};

export default {
  generateHreflangURLs,
  getDirectoriesSync,
  readSuccessStoriesDataSync,
  randomInt
};