// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

// Use Express library

import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());

const users: { name: string }[] = [];

app.post('/user', (req: Request, res: Response) => {
    Promise.resolve(req.body.name).then((name) => {
        if (!name || users.find(user => user.name === name)) {
            throw new Error('Name is required')
        }
        return name;
    }).then((name) => {
        users.push({ name });
        res.status(200).send();
    }).catch((e: Error) => res.status(400).send({ error: e.message }))
});

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
