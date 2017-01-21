import express from 'express';
import path from 'path';
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.path);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-UserToken, Authorization');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});


module.exports = router;
