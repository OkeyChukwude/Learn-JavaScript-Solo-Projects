let input

function convert(input) {
    // Length Conversion
    let feet = input * 3.281
    let meters = input / 3.281

    let lengthResult = `${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters`

    document.querySelector('.length-result-value').textContent = lengthResult

    // Volume Conversion
    let litres = input * 3.785
    let gallons = input / 3.785

    let volumeResult = `${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${litres.toFixed(3)} liters`

    document.querySelector('.volume-result-value').textContent = volumeResult

    //Mass Conversion
    let kilograms = input / 2.205
    let pounds = input * 2.205

    let massResult = `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilograms.toFixed(3)} kilos`

    document.querySelector('.mass-result-value').textContent = massResult
}

function inputEvent() {
    input = document.querySelector('#input').value
    convert(input)
}