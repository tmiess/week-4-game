var play = {
    crystalVals: [],
    wins: 0,
    losses: 0,
    currentSum: 0,
    targetSum: 0,

    //need to have one function that creates an array with random numbers (1-12) assigned to the gems
    //another function will take this array and match it to the button ids
    //so when a certain button is clicked, it will add a number to the current sum
    //need to also have function that produces random target between 19-120

    newValues: function() {
        for (var i = 0; i < 4; i++) {
            this.crystalVals[i] = Math.floor(Math.random() * 12) + 1;
        }
        this.targetSum = Math.floor(Math.random() * (102) + 19);
        $("#numberText").text(this.currentSum);
        $("#targetText").text(this.targetSum);
        $("#winText").text(this.wins);
        $("#lossText").text(this.losses);
        console.log(this.crystalVals);
    },

    adder: function(value) {
        this.currentSum = this.currentSum + this.crystalVals[value];
        $("#numberText").text(this.currentSum);
    },

    compare: function() {
        if (this.currentSum === this.targetSum) {
            //display: you win
            this.wins++;
            this.reset();
        }
        else if (this.currentSum > this.targetSum) {
            //display: you lose
            this.losses++;
            this.reset();
        }
    },

    reset: function() {
        this.crystalVals = [];
        this.currentSum = 0;
        this.targetSum = 0;
        this.newValues();

    },

};



$("document").ready(function() {

    play.newValues();

    $("#crystalOne").click(function() {
        play.adder(0);
        play.compare();
    });

    $("#crystalTwo").click(function() {
        play.adder(1);
        play.compare();
    });

    $("#crystalThree").click(function() {
        play.adder(2);
        play.compare();
    });

    $("#crystalFour").click(function() {
        play.adder(3);
        play.compare();
    });


});
