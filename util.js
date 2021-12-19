const request = require('request')

const getMarketData = (callback) => {
    request({ url: "https://www.cryptingup.com/api/markets", json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to api services!")
        } else {
            callback(undefined, {
                data: body
            })
        }
    })
}

module.exports = getMarketData