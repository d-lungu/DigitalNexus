import { browser } from '$app/environment'
import { goto } from '$app/navigation'

/** @param {string} endpoint */
export async function fetchEndpointData(endpoint) {
    const MAX_ITEMS = 500 // performance reasons
    let jsonData = await fetch(endpoint).then((res) => res.json())

    if (jsonData.length > MAX_ITEMS) jsonData.length = MAX_ITEMS // reduce size to max

    return jsonData
}

/** @param {string} route */
export function goBack(route) {
    goto(route)
}

/** @param {float} n */
export function roundToTwoDigits(n) {
    try {
        return parseFloat(n).toFixed(2)
    } catch (error) {
        return parseFloat(n)
    }
}

/** @param {float} price */
export function checkForNullPrice(price) {
    if (price === null) {
        return 0
    }
    return roundToTwoDigits(price)
}

export function addItemToCart(itemName, itemPrice) {
    if (browser === null) {
        browser = typeof window !== 'undefined' ? true : null
    }
    if (browser) {
        var newList = []
        if (localStorage.getItem('cartItems') !== null) {
            newList = JSON.parse(localStorage.getItem('cartItems'))
        }
        newList.push([itemName, itemPrice])
        localStorage.setItem('cartItems', JSON.stringify(newList))
    }
}

export function checkIfShowUnkPriceItems() {
    if (browser = typeof window !== 'undefined' && sessionStorage.getItem('showUnkPriceItems') === null && sessionStorage.getItem('showUnkPriceItems') !== "false") {
        sessionStorage.setItem('showUnkPriceItems', "true")
        return true;
    }
    return false;
}

export var datasetEndpoints = {
    cpu: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu.json',
    case: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/case.json',
    cpucooler:
        'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu-cooler.json',
    gpu: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/video-card.json',
    mobo: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/motherboard.json',
    os: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/os.json',
    psu: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/power-supply.json',
    ram: 'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/memory.json',
    storage:
        'https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/internal-hard-drive.json',
}
