'use strict'; 

const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3000;

const express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const Sequelize = require('sequelize');
const { User } = require('./models');

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
});

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const singleUser = await User.findByPk(req.params.id);
    res.json(singleUser);
});

app.post('/users', async (req, res) => {
    const { first_name, last_name, email } = req.body;
    const newUser = await User.create({
        first_name,
        last_name,
        email
    });

    res.json({
        id: newUser.id
    });
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});

app.post('/users/:id', async (req, res) => {
    const { id } = req.params;

    const updatedUser = await User.update(req.body, {
        where: {
            id
        }
    });

    res.json(updatedUser);
});