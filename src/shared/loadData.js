import 'isomorphic-fetch';

const getPosts = () => {
  const posts = [];
  return posts;
}

const getPost = (id) => {
  const posts = [];
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