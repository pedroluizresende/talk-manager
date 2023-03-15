const { readAll } = require('../utils/readAndWriteFiles');

const validateTerm = async (req, res, next) => {
  const term = req.query.q;
  const talker = await readAll();
  if (!term || term.length === 0) {
    return res.status(200).json(talker);
  }
  next();
};

module.exports = validateTerm;