// Write a function that accepts an array of URLs,
// makes parallel queries for each of them, and returns an
// an array of results in the order in which the queries are completed.

import axios from "axios";

// Example input data:
// const urls = ['https://jsonplaceholder.typicode.com/posts/1', 
// 'https://jsonplaceholder.typicode.com/posts/2'];

// Expected result:
// [
// { data: { ... }, status: 200 },
// { data: { ... }, status: 200 }
// ] 
type RequestsResult = {
    data: any,
    status: number
}

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    const promises = await Promise.all(urls.map((url) => {
        return axios.get(url).then(data => data).catch(e => e)
    }));
    console.log(promises)
    return promises.map(({ data, status }) => ({ data, status }));
}

module.exports = { fetchAll };