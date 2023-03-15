const { readAll } = require('../utils/readAndWriteFiles');

const onlyDate = (terms) => {
  if (terms.length === 1 && terms[0] === 'date') {
    return true;
  }
  return false;
};

const existDate = (terms) => terms.includes('date');

const validateFormat = (date) => {
  const regexDate = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  return regexDate.test(date);
};

const validateParamDate = async (req, res, next) => {
  const terms = Object.keys(req.query); 
  if (onlyDate(terms) && req.query.date.length === 0) {
    const talker = await readAll();
    return res.status(200).json(talker);
  }
  console.log(terms);
  if (existDate(terms) && !validateFormat(req.query.date)) {
    return res.status(400)
      .json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = validateParamDate;