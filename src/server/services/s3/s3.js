import knox from 'knox';
const client = knox.createClient({
      key: process.env.AWS_ACCESS_KEY_ID || '.',
      secret: process.env.AWS_SECRET_KEY || '.',
      bucket: "robotmaster-website"
    });

export default function() {
  return function(req, res) {
    client.getFile(req.path, function(err, resp) {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        if (resp.statusCode !== 200) {
          res.send(resp.statusCode);
        } else {
          res.setHeader("Content-Length", resp.headers["content-length"]);
          res.setHeader("Content-Type", resp.headers["content-type"]);
          resp.pipe(res);
        }
      }
    });
  };
};
