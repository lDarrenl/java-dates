const now = Date()
//const date = new Date(2020,05,11)
const date = new Date('2020-06-11 05:30:00')
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
date.setFullYear(2020)

const time = date.getTime()

const formattedDate = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    weekday: 'lon',
    day: 'numeric'
})
const formattedTime = date.toLocaleTimeString()
const formattedDate2 = date.toLocaleString()



// console.log(formattedDate)
// console.log(formattedTime)
// console.log(formattedDate2)
// console.log(now)
// console.log(date)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(houts)
// console.log(minutes)
// console.log(seconds)
// console.log(time)