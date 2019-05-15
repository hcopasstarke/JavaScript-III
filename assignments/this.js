/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: When a function is inside of the global scope, "this"'s value will be in the window object. 
* 2. Implicit Binding: If a function is called by a preceding dot, the object before the dot is this (used when invoking a function).
* 3. New Binding: When a constructor function is used, "this" refers to the object that's created and returned by the constructor (the new object). 
* 4. Explicit Binding: When call and apply methods are used, "this" is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function messageGoal(chore) {
    console.log(this);
    return chore;
}
messageGoal('Organize!');

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
    this.messaging = 'DO THIS ';
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
MessageGoal.prototype.takeBreaks = function() {
    console.log('Take breaks from ' + this.chore);
    console.log(this);
};

messageShopping.takeBreaks();
messageHomework.takeBreaks();

var task = {
    task1: 'organizing!',
    task2: 'homework!',
    task3: 'shopping!'
}

var messageGoal = {
    messaging: 'Work on ',
    task: function(chore) {
        console.log(this.messaging + chore);
        console.log(this);
    }
}
messageGoal.task('organizing!');