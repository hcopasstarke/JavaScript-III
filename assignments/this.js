function sayGoal(goal) {
    console.log('Do this, Hai: ' + goal);
    console.log(this);
};

sayGoal('Organize tonight!');

// Principle 2

// code example for Implicit Binding

const myTask = {
    messaging: 'Work on ',
    messageGoal: function(chore) {
        console.log(`${this.messaging}${chore}`);
        console.log(this);
    }
};

myTask.messageGoal('homework!')

function messageGoal() {
    console.log(this.chore);
}

// Principle 3
// code example for New Binding

function MessageGoal(chore) {
    this.messaging = 'DO THIS: ';
    this.chore = chore;
    this.task = function () {
        console.log(this.messaging + this.chore);
        console.log(this);
    };
}
const goal1 = new MessageGoal('HOMEWORK!'); 
const goal2 = new MessageGoal('SHOPPING!');

goal1.task();
goal2.task();

// Principle 4

// code example for Explicit Binding
goal1.task.call(goal2);
goal2.task.apply(goal1);