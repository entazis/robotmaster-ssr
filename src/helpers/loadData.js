import 'isomorphic-fetch';
import * as fs from 'fs';
import marked from 'marked';

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

const getPosts = () => {
  return posts;
}

const getPost = (id) => {
  const post = posts.find(post => post.id === id);

  if (post) {
    return post;
  }
  else {
    return 404;
  }
};

const loadData = (resourceType, resourceId = null, language = 'en') => {
  switch (resourceType) {
    case 'posts':
      return getPosts();
    case 'post':
      //FIXME
      return getPost();
    default:
      break;
  }
};

export default loadData;