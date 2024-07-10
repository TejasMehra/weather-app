const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=821b4a3ad4664b159f775148242506&q=' + latitude + ',' + longitude

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find that location', undefined)
        } else {
            const z = body.current.condition.text;
            const x = body.current.temp_c;
            const y = body.current.humidity;
            callback(undefined, z + '. The current teperature is ' + x + ', and the humidity is '+ y + '.')
        }
    })
}

module.exports = forecast

// const url = 'https://api.weatherapi.com/v1/current.json?key=821b4a3ad4664b159f775148242506&q=37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find that location')
//     } else {
//         console.log(response.body.current.condition.text + '. The current teperature is ' + response.body.current.temp_c + ', and the humidity is '+ response.body.current.humidity + '.')
//     }
// })

