// Write your solution here!
const drivers = ["Milo","Otis", "Garfield"];

function destructivelyAppendDriver(){
    drivers.push('Ralph')
}
function destructivelyPrependDriver(){
    drivers.unshift('Bob')
}
function destructivelyRemoveLastDriver(){
    drivers.pop()
}
function destructivelyRemoveFirstDriver(){
    drivers.shift()
}
function appendDriver(){
    const newDrivers = [...drivers, "Broom"]
    return newDrivers
}
function prependDriver(){
    const newDrivers = ["Arnold", ...drivers]
    return newDrivers
}
function removeLastDriver(){
    const removesDriver = drivers.slice(0, drivers.length -1)
    return removesDriver
}
function removeFirstDriver(){
    const removesDriver = drivers.slice(1)
    return removesDriver
}//why would drivers.slice(0) remove the driver?