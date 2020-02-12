let redisClient = null

module.exports = {
    init: () => {
        try {
            const Redis = require('ioredis')
            redisClient = new Redis()
        } catch (e) {
            console.error('Redis db is not available')
            console.error(e)
            throw e
        }
    },

    close: async () => {
        if (redisClient) redisClient.disconnect()
    },
    getTokens: async () => {
        const tokensString = await redisClient.get('tokens')
        return JSON.parse(tokensString)
    },
    saveTokens: (tokens) => {
        const tokensString = JSON.stringify(tokens)
        return redisClient.set('tokens', tokensString)
    },
}
