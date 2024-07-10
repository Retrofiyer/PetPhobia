exports.login = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const redirectUrl = `/welcome?name=${firstName} ${lastName}`;
  res.json({ redirectUrl });
};