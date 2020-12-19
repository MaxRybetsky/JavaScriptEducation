function myFirstApp(name, age) {
    console.log(`Hello ${name}!`);

    showSkills();
    checkAge();
    calcPow(4);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
        }
    }

    function checkAge() {
        if(age > 18) {
            console.log("You're good one!");
        } else {
            console.log("Hmm, you are the best!!!");
        }
    }

    function calcPow(num) {
        num *= num;
        console.log(num);
    }
}

myFirstApp('Max', 24);