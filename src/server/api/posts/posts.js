import express from 'express';
import fs from "fs";
import marked from "marked";

const router = express.Router();
const posts = JSON.parse(fs.readFileSync('src/blog/posts.json'));

const initializePosts = () => {
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
};

const handlePostsGet = (req, res) => {
  res.json(posts);
};

const handlePostGet = (req, res) => {
  const post = posts.find(post => post.id === req.params.postId);
  (post) ? res.send(post) : res.sendStatus(404);
};

router.get('/posts', handlePostsGet);
router.post('/post/:postId', handlePostGet);

initializePosts();

export default router;

