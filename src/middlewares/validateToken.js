const validateToken = (req, res, next) => {
  const headers = Object.keys(req.headers);
  if (!headers.some((h) => h === 'authorization')) {
  return res.status(401).json({ message: 'Token não encontrado' });
  }
  const { authorization } = req.headers;

 if (typeof authorization !== 'string' || authorization.length !== 16) {
  console.log(authorization);
    return res.status(401).json({ message: 'Token inválido' });
  } 

  next();
};

module.exports = validateToken;