

function weatherController(city) {
    const lat = Math.floor(Math.random() * 90);
    const secondlat = Math.floor(Math.random() * 90)*-1;
    return lat <= 90 && secondlat >=-90
}

module.exports = {
    weatherController
}