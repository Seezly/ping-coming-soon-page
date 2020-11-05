const $inner = document.querySelector('.content__inner');

const $span = document.querySelector('.container__subscribe__error'),
    $input = document.querySelector('.container__subscribe__input');

function input() {
    
    if ($input.validity.valid) {
        $span.classList.add('none')
        console.log('You get it');
    } else {
        console.log('Nah, u screwed it up');
        $span.classList.remove('none')
    }
}

document.addEventListener('keyup', input);