
function taxable(state, taxExempt){
    if (state == IA && taxExempt == false){
        return 'is taxable';
    } else {
        return 'Wrooooooooooonnnnnnnnng';
    }
}

function isVehicle(hasWheels, canFly, canSwim){
    if (hasWheels === true || canFly === true || canSwim === true){
        return 'is vehicle';
    }
}

document.getElementById('result').innerHTML = taxable(IA, false);