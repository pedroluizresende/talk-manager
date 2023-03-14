const express = require('express');
const { readAll } = require('../utils/readAndWriteFiles');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talker = await readAll();
  if (!talker) return res.status(200).json([]);
  return res.status(200).json(talker);
});

module.exports = router;
