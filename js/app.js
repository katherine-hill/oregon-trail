(function() {
    "use strict";

    class Pioneer {
        constructor(name) {
            this.name = name;
            this.food = Number(Math.floor(Math.random() * 50) + 10);
            this.health = Math.random() >= 0.5;
            this.eatFood();
            this.hunt();
            // console.log(this.name);
            // console.log(this.food);
            // console.log(this.health);
        } //end constructor

        eatFood() {
            if (this.food >= 10) {
                this.food -= 10;
                // console.log('this is eating food'this.food);
                return this.food;
            } else {
                console.log('no more food, brah');
            }
        } //end eatFood

        hunt() {
            var huntFood = Number(Math.floor(Math.random() * 20));
            if (huntFood >= 1) {
                this.food += huntFood;
                return this.food;
            } else {
                console.log('nope, no more food for you');
            }
        } //end hunt

    } //end Pioneer class

    class Wagon {

        constructor(name) {

            this.people = [];
            this.sick = 0;
            this.allFood = 0;
            this.checkFood();
            this.checkHealth();

        }
        //end constructor

        add(name) {
            if (this.people.length < 5) {
                this.people.push(name);
            }
            if (this.people.length === 5) {
                this.checkHealth();
                this.checkFood();
            }
        } // end add
        checkHealth() {
            console.log(this.people);
            for (let i = 0; i < this.people.length; i++) {
                console.log(this.people[i]);
                if (this.people[i].health === true) {
                    this.sick += 1;
                }
            }
            console.log('Sick folk', this.sick);
        } // end checkHealth
        checkFood() {
            for (let i = 0; i < this.people.length; i++) {
                this.allFood = this.allFood + this.people[i].food;
            }
            console.log('All food', this.allFood);
        } //end checkFood
    }

    const jim = new Pioneer('jim');
    const jam = new Pioneer('jam');
    const jerry = new Pioneer('jerry');
    const pj = new Pioneer('pj');
    const simon = new Pioneer('simon');


    const wagon = new Wagon();

    wagon.add(jim);
    wagon.add(jam);
    wagon.add(jerry);
    wagon.add(pj);
    wagon.add(simon);
})();
