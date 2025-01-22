// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

import mongoose, { model, Schema } from "mongoose"

// Use Mongoose library

type DuplicatedUsers = {
    email: string
}

const Users = mongoose.model('users');

async function manageUsers(): Promise<DuplicatedUsers[]> {
    await mongoose.connect('mongodb://localhost:27017/')
    return Users.aggregate([
        {
            $group: {
                _id: '$email',
                count: { $sum: 1 },
                users: { $push: '$$ROOT' },
            },
        },
        {
            $match: {
                count: { $gt: 1 },
            },
        },
    ])
}

module.exports = { manageUsers }