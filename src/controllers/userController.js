let users = [];

function createUser(req, res) {
   const {name,email} = req.body;
   

   if (!name || !email){
    return res.status(400).json({error: "Nome e email incorretos"})
   };

   const newUser = {
    id: users.length + 1,
    name,
    email
   };

   users.push(newUser);

   res.status(201).json(newUser);
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