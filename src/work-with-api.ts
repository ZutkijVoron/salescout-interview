// Write a function that makes a GET request to the JSONPlaceholder API and
// returns posts that are longer than 100 characters.

import axios from "axios"

// API URL: https://jsonplaceholder.typicode.com/posts
// Use axios library
type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        return res.data.filter((data: APIResponseType) => data.body.includes('100 characters'))
    }).catch(() => [])
}

module.exports = { fetchLongPosts }
