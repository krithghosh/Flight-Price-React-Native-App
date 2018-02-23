function getPadding(val) {
    return (val >=0 && val <= 9) ? '0' + val : val
}

export function getFlightTime(time) {
    var date = new Date(time)
    var hour = getPadding(date.getHours())
    var minutes = getPadding(date.getMinutes())
    return hour + ':' + minutes
}

export function getTimeDifferenceHours(time) {
    var temp = time
    var hours = Math.floor(temp / 60)
    var minutes = time - (hours * 60)
    return hours + 'h' + ' ' + minutes + 'm'
}