// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

import redis from 'redis';

// Use redis library

async function manageRedis(client: redis.RedisClient): Promise<void> {
    // const client = redis.createClient();

    // для того чтоб это работало нужен redis 3.x
    // и почему-то без передачи client не работает
    // ( скорее всего createClient создаёт новый экземпляр
    // клиента )

    client.set("key", "value", (err, res) => {
        if (res === "OK") {
            client.get('key', (err, res) => {

            });
        }
    })
}

module.exports = { manageRedis };
