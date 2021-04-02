let dish
let drink
let desert

function SelectDish(buttonClass) {
    const dishes = document.querySelector('.dishes .selected')
    if (dish != null) {
        dishes.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    dish = true;
}

function SelectDrink(buttonClass) {
    const drinks = document.querySelector('.drinks .selected')
    if (drinks != null) {
        drinks.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    drink = true;
}

function SelectDesert(buttonClass) {
    const deserts = document.querySelector('.deserts .selected')
    if (deserts != null) {
        deserts.classList.remove('selected')
    }

    const select = document.querySelector(buttonClass + ' .selected-border')
    select.classList.add('selected')

    desert = true;
}