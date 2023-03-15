const fs = require('fs').promises;

const path = 'src/talker.json';

const readAll = async () => {
  const talkers = await fs.readFile(path, 'utf-8');
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
  fs.writeFile(path, JSON.stringify(talkers, null, 2));
  return id;
};

const updatedTalker = async (id, talker) => {
  const numberId = Number(id);
  const talkers = await readAll();
  if (!talkers.some((t) => t.id === numberId)) return null;
  const newTalkers = talkers.reduce((arr, t) => {
    if (t.id === numberId) return [...arr, { id: numberId, ...talker }];
    return [...arr, t];
  }, []);
  fs.writeFile(path, JSON.stringify(newTalkers, null, 2));
};

const removeTalker = async (id) => {
  const numberId = Number(id);
  const talkers = await readAll();
  const newTalkers = talkers.filter((t) => t.id !== numberId);
  fs.writeFile(path, JSON.stringify(newTalkers, null, 2));
};

const filterTalker = async (terms) => {
  let talkers = [...await readAll()];
  const filters = Object.keys(terms);
  filters.forEach((filter) => {
    if (filter === 'q') {
      talkers = talkers.filter((t) => t.name.toLowerCase().includes(terms.q.toLowerCase()));
    }
    if (filter === 'date') {
    talkers = talkers.filter((t) => t.talk.watchedAt.toLowerCase()
    .includes(terms.date.toLowerCase())); 
    }
    if (filter === 'rate') {
      talkers = talkers.filter((t) => t.talk.rate === Number(terms.rate)); 
    }
  });
  return talkers;
};

const updateRate = async (id, reqRate) => {
  const { rate } = reqRate;
  const talkers = await readAll();
  const newTalkers = talkers.reduce((arr, talker) => {
    if (talker.id === Number(id)) {
      return [...arr, {
        ...talker,
          talk: {
            ...talker.talk,
            rate,
          },
      }];
    }
    return [...arr, talker];
  }, []);
  fs.writeFile(path, JSON.stringify(newTalkers, null, 2));
};

module.exports = {
  readAll,
  readById,
  writingTalker,
  updatedTalker,
  removeTalker,
  filterTalker,
  updateRate,
};