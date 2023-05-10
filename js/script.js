const settings = document.querySelector('.settings')
const active = document.querySelector('.active')
const imageSection = document.querySelector('.image-section')
const eventField = document.querySelector('.event')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImage = document.querySelector('#event-image')

const saveBtn = document.querySelector('.save')
const settingsBtn = document.querySelector('.settings-btn')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

let countTime

let countDownDate

const showSettings = () => {
	settings.classList.toggle('active')
}

const changeImage = () => {
	imageSection.style.backgroundImage = `url('${eventImage.value}')`
  eventImage.value = `../img/default.jpg`
}

const clearTime = () => {
	clearInterval(countTime)
}

const setTime = () => {
	let nowTime = new Date()
	let result = countDownDate - nowTime

	let days = Math.floor(result / (1000 * 60 * 60 * 24))
	let hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((result % (1000 * 60)) / 1000)
	daysCount.innerHTML = days
	hoursCount.innerHTML = hours
	minutesCount.innerHTML = minutes
	secondsCount.innerHTML = seconds
	if (result < 0) {
		clearInterval(setTime)
	}
}

const addEvent = () => {
	eventField.textContent = eventName.value
	settings.classList.remove('active')
	countDownDate = new Date(`${eventYear.value},${eventMonth.value},${eventDay.value}`)
	setTime()
}

saveBtn.addEventListener('click', addEvent)
saveBtn.addEventListener('click', changeImage)
settingsBtn.addEventListener('click', showSettings)

addEvent()
setInterval(setTime, 1000)
