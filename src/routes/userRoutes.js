const express = require('express');
const router = express.Router();

let users = [];

router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user); 
});

router.get('/users', (req, res) => {
    res.json(users);
});

router.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const updatedUser = req.body;

    users[id] = updatedUser;
    res.json(updatedUser);
});

router.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    users.splice(id, 1);
    res.send('Usuário deletado');
});

module.exports = router;