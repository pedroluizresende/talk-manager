const express = require('express');
const { readAll, readById } = require('../utils/readAndWriteFiles');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talker = await readAll();
  if (!talker) return res.status(200).json([]);
  return res.status(200).json(talker);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await readById(id);
 
console.log(talker);
  if (talker.length === 0) {
    return res.status(404)
    .json({ message: 'Pessoa palestrante não encontrada' }); 
}
  return res.status(200).json(talker[0]); 
});

module.exports = router;
