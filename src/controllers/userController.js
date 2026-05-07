let users = [];

function createUser(req, res) {
   const {name,email} = req.body;
   

   if (!name || !email){
    return res.status(400).json({error: "Nome and email incorrect"})
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

    if (!users[id]){
        return res.status(404).json({
            error: "User not found"
        });
    }

    const { name, email } = req.body;

    if (!name || !email){
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    users[id] = {
        id: users[id].id,
        name,
        email
    };

    res.json(users[id]);
}

function deleteUser(req, res){
    const id = Number(req.params.id);

    if (!users[id]) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    users.splice(id, 1);

    res.json({
        message: "User deleted successfully"
    });
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};