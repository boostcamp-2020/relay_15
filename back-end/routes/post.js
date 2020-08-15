const express = require('express');
const router = express.Router();
const dbHelper = require('../public/database/dbHelper');
const multer = require('multer');
const path = require('path');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});
const pythonReader = require('../imageProcessing/tagging');

/* 게시글 목록 */
router.get('/', async (req, res, next) => {
  res.json((await dbHelper.getAllPost(req.body.email))[0]);
});
/* 게시글 내용 */
router.get('/:id', async (req, res, next) => {
  dbHelper.updatePostViewsPlusOne(req.params.id);
  res.json((await dbHelper.getPost(req.params.id, req.body.email))[0]);
});
/* 게시글 작성 */
router.post('/upload', async (req, res, next) => {
  const result = await dbHelper.savePost(req.body.title, req.body.email, req.body.image);
  if (result) {
    await dbHelper.savePostToTag(result[0].insertId, JSON.parse(req.body.tags));
    res.json(true);
    return;
  }
  res.json(result);
});
/* 이미지 저장 */
router.post('/image', upload.single('img'), async (req, res, next) => {
  const tagString = await pythonReader(
    `https://lh3.googleusercontent.com/proxy/615jUz6xIr1Itt1Y1C8nJKxTu5Zse1Jp8STG1q8grjvSXO-RN_uAEaKVSDbjvB1PVMXwcqmHDi2QRNmQjQLGRMID0j2aMMXQ00I7pA8fj_v04mt41cRb1DagawZne4C03QQ`
  );
  /* `http://${getIPAddress()}/image/${req.file.}` */
  const tags = JSON.parse(tagString[0].replace(/\'/g, '"'));
  tags.forEach(async (tag) => {
    await dbHelper.saveTag(tag);
  });

  res.json({ tags: tags });
});
// http://localhost::5000/image/abc.jpg
function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) return alias.address;
    }
  }
  return '0.0.0.0';
}

module.exports = router;
