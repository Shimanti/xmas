const specialDate = new Date("25 Dec 2022")
// const pomodoro = Date.now() + 25 * 60 * 1000

const countdown = () => {
  const current = new Date()
  const totalSeconds = (specialDate - current) / 1000
  
  const days = Math.floor(totalSeconds / 60 / 60 / 24)
  const hours = Math.floor(totalSeconds / 60 / 60 ) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  document.querySelector('#days').innerHTML = days
  document.querySelector('#hours').innerHTML = format(hours)
  document.querySelector('#mins').innerHTML = format(mins)
  document.querySelector('#seconds').innerHTML = format(seconds)
}

const format = (time) => time < 10 ? `0${time}`: time

countdown()
setInterval(countdown, 1000)
