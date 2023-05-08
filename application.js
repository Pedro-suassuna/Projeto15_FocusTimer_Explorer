//PARTE DOS SONS

// DOM dos botões
const forestButton = document.querySelector(".forest")
const rainButton = document.querySelector(".rain")
const coffeeShopButton = document.querySelector(".coffeeShop")
const fireplaceButton = document.querySelector(".fireplace")

// DOM do botão de input range para volume
const forestVolumeInput = document.querySelector("#forestInput")
const rainVolumeInput = document.querySelector("#rainInput")
const coffeeShopVolumeInput = document.querySelector("#coffeeShopInput")
const fireplaceVolumeInput = document.querySelector("#fireplaceInput")

// DOM dos áudios
const forestSound = document.querySelector(".forestAudio")
const rainSound = document.querySelector(".rainAudio")
const coffeeShopSound = document.querySelector(".coffeeShopAudio")
const fireplaceSound = document.querySelector(".fireplaceAudio")

// eventos
forestButton.addEventListener("click", startForestSound)
rainButton.addEventListener("click", startRainSound)
coffeeShopButton.addEventListener("click", startCoffeeShopSound)
fireplaceButton.addEventListener("click", startFireplaceSound)

forestVolumeInput.addEventListener("input", changeForestAudioVolume)
rainVolumeInput.addEventListener("input", changeRainAudioVolume)
coffeeShopVolumeInput.addEventListener("input", changeCoffeeShopAudioVolume)
fireplaceVolumeInput.addEventListener("input", changeFireplaceAudioVolume)

// funções
function startForestSound() {
  if (forestButton.classList.contains("on")) {
    forestButton.classList.remove("on")
    forestSound.pause()
  } else {
    forestButton.classList.add("on")
    forestSound.play()
    changeForestAudioVolume()
  }
  forestSound.loop = true
}

function startRainSound() {
  if (rainButton.classList.contains("on")) {
    rainButton.classList.remove("on")
    rainSound.pause()
  } else {
    rainButton.classList.add("on")
    rainSound.play()
    changeRainAudioVolume()
  }
  rainSound.loop = true
}

function startCoffeeShopSound() {
  if (coffeeShopButton.classList.contains("on")) {
    coffeeShopButton.classList.remove("on")
    coffeeShopSound.pause()
  } else {
    coffeeShopButton.classList.add("on")
    coffeeShopSound.play()
    changeCoffeeShopAudioVolume()
  }
  coffeeShopSound.loop = true
}

function startFireplaceSound() {
  if (fireplaceButton.classList.contains("on")) {
    fireplaceButton.classList.remove("on")
    fireplaceSound.pause()
  } else {
    fireplaceButton.classList.add("on")
    fireplaceSound.play()
    changeFireplaceAudioVolume()
  }
  fireplaceSound.loop = true
}

function changeForestAudioVolume() {
  forestSound.volume = forestVolumeInput.value
}

function changeRainAudioVolume() {
  rainSound.volume = rainVolumeInput.value
}

function changeCoffeeShopAudioVolume() {
  coffeeShopSound.volume = coffeeShopVolumeInput.value
}

function changeFireplaceAudioVolume() {
  fireplaceSound.volume = fireplaceVolumeInput.value
}

//
//
//

//PARTE DOS BOTÕES DE AUMENTO E DIMUIÇÃO DE TEMPO

// variáveis
const addFiveButon = document.querySelector(".addFive")
const removeFiveButon = document.querySelector(".removeFive")
let minutes = document.querySelector(".minutes")

// eventos
addFiveButon.addEventListener("click", increaseFiveMinutes)
removeFiveButon.addEventListener("click", decreaseFiveMinutes)

// funções
function increaseFiveMinutes() {
  let minutesInNumber = Number(minutes.innerHTML)
  minutesInNumber += 5
  minutes.innerHTML = String(minutesInNumber).padStart(2, "0")
}

function decreaseFiveMinutes() {
  let minutesInNumber = Number(minutes.innerHTML)
  minutesInNumber -= 5
  minutes.innerHTML = String(minutesInNumber).padStart(2, "0")

  if (minutesInNumber <= 0) {
    minutesInNumber = 0
    minutes.innerHTML = String(minutesInNumber).padStart(2, "0")
  }
}

//
//
//

// PARTE DOS BOTÕES DE PLAY E STOP

// variáveis
const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
let getTimeAtRealTime
let seconds = document.querySelector(".seconds")

// eventos
playButton.addEventListener("click", makeTimePass)
stopButton.addEventListener("click", stopTimePassing)

// funções
function makeTimePass() {
  getTimeAtRealTime = setTimeout(function () {
    let secondsInNumber = Number(seconds.innerHTML)
    let minutesInNumber = Number(minutes.innerHTML)

    if (secondsInNumber == 0 && minutesInNumber == 0) {
      clearTimeout(getTimeAtRealTime)
      return
    }

    if (secondsInNumber == 0) {
      seconds.innerHTML = "59"
      minutes.innerHTML = String(minutesInNumber - 1).padStart(2, "0")
    } else {
      secondsInNumber -= 1
      seconds.innerHTML = String(secondsInNumber).padStart(2, "0")
    }

    makeTimePass()
  }, 1000)
}

function stopTimePassing() {
  let minutesInNumber = Number(minutes.innerHTML)
  minutes.innerHTML = minutes.innerHTML

  clearTimeout(getTimeAtRealTime)
  return
}

// PARTE DO BOTÃO DE LIGHT E DARK MODE

// variáveis
const body = document.querySelector("body")
const lightModeButton = document.querySelector(".lightMode")
const darkModeButton = document.querySelector(".darkMode")

lightModeButton.addEventListener("click", goToDarkMode)
darkModeButton.addEventListener("click", backToLightMode)

function goToDarkMode() {
  lightModeButton.classList.add("hide")
  darkModeButton.classList.remove("hide")
  body.classList.toggle("darkMode")
}

function backToLightMode() {
  lightModeButton.classList.remove("hide")
  darkModeButton.classList.add("hide")
  body.classList.toggle("darkMode")
}
