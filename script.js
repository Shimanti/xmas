// get today for current year
const today = new Date()

// set Xmas to current year
let xmas = new Date(today.getFullYear(), 11, 25)

// reset year if it's after Xmas Day
if(today > xmas) {
  xmas = new Date(today.getFullYear()+1,11,25) 
}

// create countdown timer
const countdown = () => {
  const current = new Date()
  const totalSeconds = (xmas - current) / 1000
  
  const days = Math.floor(totalSeconds / 60 / 60 / 24)
  const hours = Math.floor(totalSeconds / 60 / 60 ) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  document.querySelector('#days').innerHTML = days
  document.querySelector('#hours').innerHTML = format(hours)
  document.querySelector('#mins').innerHTML = format(mins)
  document.querySelector('#seconds').innerHTML = format(seconds)
}

// format time for less than 10
const format = (time) => time < 10 ? `0${time}`: time

// initiate timer
countdown()

// countdown seconds
setInterval(countdown, 1000)
