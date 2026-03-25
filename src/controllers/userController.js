let users = [];

function createUser(req, res) {
   const user = req.body;
   users.push(user);
   res.status(201).json(user);
}

function getUsers(req, res){
    res.json(users);
}

function updateUser(req, res){
    const id = Number(req.params.id);
    const newData = req.body;

    users[id] = newData;
    res.json(newData);
}

function deleteUser(req, res){
    const id = Number(req.params.id);

    users.splice(id, 1);
    res.send('Usuário deletado');
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};