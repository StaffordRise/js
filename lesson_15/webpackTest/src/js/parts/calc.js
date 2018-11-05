function calc() {  
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        totalValue = document.querySelector('#total'),
        place = document.querySelector('#select'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('keyup', function() {
        this.value = this.value.replace(/[^0-9]/,"");
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        });
        restDays.addEventListener('keyup', function() {
        this.value = this.value.replace(/[^0-9]/,"");
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        });

        place.addEventListener('change', function(){
        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
        }); 
}
module.exports = tabs;