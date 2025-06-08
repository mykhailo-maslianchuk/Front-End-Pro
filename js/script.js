'use strict'

let userInfoTime = +prompt(`Вкажіть будь ласка кількість годин:`);
    if(isNaN(userInfoTime)) {
        alert('Введіть будь ласка числове значення!');
        userInfoTime = +prompt(`Вкажіть будь ласка кількість годин:`);
        if((userInfoTime)) {
            const userInfoSeconds = (userInfoTime * 60)*60;
            alert(`У ${userInfoTime} годині(ах) міститься ${userInfoSeconds} секунд.`)
        }
    }else {
        const userInfoSeconds = (userInfoTime * 60)*60;
        alert(`У ${userInfoTime} годині(ах) міститься ${userInfoSeconds} секунд.`)
    }






