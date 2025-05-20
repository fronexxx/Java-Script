// Task-1
let button = document.getElementById('btn');
button.onclick = function () {
    document.getElementById('text').remove();
};

// Task-2
document.forms.f1.onsubmit = function (ageChecker) {
    ageChecker.preventDefault();
    if (this.age.value >= 18){
        console.log("You're welcome");
    }else if (this.age.value > 0 && this.age.value < 18){
        console.log("You're too young");
    }else {
        throw new Error('Age must be positive');
    }

}

