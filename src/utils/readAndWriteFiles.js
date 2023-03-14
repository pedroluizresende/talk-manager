const fs = require('fs').promises;

const readAll = async () => {
  const talkers = await fs.readFile('src/talker.json', 'utf-8');
  console.log(talkers);
  return JSON.parse(talkers);
};

readAll();
module.exports = {
  readAll,
};