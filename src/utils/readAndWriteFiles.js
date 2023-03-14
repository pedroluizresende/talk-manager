const fs = require('fs').promises;

const readAll = async () => {
  const talkers = await fs.readFile('src/talker.json', 'utf-8');
 return JSON.parse(talkers);
};

const readById = async (id) => {
  const talkers = await readAll();
  return talkers.filter((t) => t.id === Number(id));
};

readById();
readAll();
module.exports = {
  readAll,
  readById,
};