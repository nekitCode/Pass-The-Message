const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const outMessage = document.querySelector('.outMessage');
const error = document.querySelector('.error');

btn.addEventListener('click',sendMessage);

function sendMessage(e) {
    let valueInput = input.value;
    if(input.value == ''){
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        },3000)
    }else {
        outMessage.textContent = valueInput;
        input.value = '';
    }
}



