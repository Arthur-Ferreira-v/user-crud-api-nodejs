const express = require ('express');

const app = express();
app.use(express.json());

let users = [];

//Criar um usuário 
app.post('/users',(req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.get('/users', (req, res) => {
  res.json(users);
});



app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  users[id] = updatedUser;
  res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  users.splice(id, 1);
  res.send ('Úsuario deletado');

});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});