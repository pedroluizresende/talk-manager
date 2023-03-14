const fs = require('fs').promises;

const readAll = async () => {
  const talkers = await fs.readFile('src/talker.json', 'utf-8');
 return JSON.parse(talkers);
};

const readById = async (id) => {
  const talkers = await readAll();
  return talkers.filter((t) => t.id === Number(id));
};

const writingTalker = async (talker) => {
  const talkers = await readAll();
  const id = talkers.length + 1;
  talkers.push({ id, ...talker });
  fs.writeFile('src/talker.json', JSON.stringify(talkers, null, 2));
  return id;
};

const updatedTalker = async (id, talker) => {
  const numberId = Number(id);
  const talkers = await readAll();
  if (!talkers.some((t) => t.id === numberId)) return null;
  const newTalkers = talkers.reduce((arr, t) => {
    if (t.id === numberId) return [...arr, talker];
    return [...arr, talker];
  }, []);
  fs.writeFile('src/talker.json', JSON.stringify(newTalkers, null, 2));
};

readById();
readAll();
module.exports = {
  readAll,
  readById,
  writingTalker,
  updatedTalker,
};