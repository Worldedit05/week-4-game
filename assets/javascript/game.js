$(document).ready(function() {

    var stats = {
        character1: {
            attack: 8,
            HP: 150,
            counterAttack: 25
        },
        character2: {
            attack: 8,
            HP: 120,
            counterAttack: 20
        },
        character3: {
            attack: 8,
            HP: 100,
            counterAttack: 30
        },
        character4: {
            attack: 8,
            HP: 140,
            counterAttack: 22
        },
        character5: {
            attack: 8,
            HP: 130,
            counterAttack: 18
        }
    }


    // // function to set the player character if 
    // // no other character has been selected
    // // i.e. "first" selection. Then set the 
    // // oppenenant if it is not the first selection

    // function selectCharacter() {

    //     if (heroSet < 0 || defenderSet < 0) {


    //             if (heroSet < 0) {

    //                 $('#user').append($(this).addClass('hero'));
    //                	$('#enemies').append($('.starter').children());
    //                	heroSet++;

    //             } else if (heroSet >= 0 && defenderSet < 0) {

    //                 $('#computer').append($(this).addClass('defender'));
    //                 defenderSet++;
    //                 console.log(stats[$('.defender').attr('id')]);
    //                 return stats[$('.defender').attr('id')]
    //             }
    //     }
    // }

    // Might need a function that resolves combat
    // and adjusts stats for the "grind" also 
    // needs to start listening again for the
    // next combat

    function grabStats() {

        console.log(stats[$('.hero').attr('id')]);
        heroAttack = stats[$('.hero').attr('id')].attack;
    }

    function combat() {

    }

    function reset() {

    }

    // Listen for the user clicks to capture 
    // the selection of a character and move 
    // it to the appropriate area 

    var heroSet = -1;
    var defenderSet = -1;

    var heroAttack;
    var heroHP;
    var heroCounterAttack;

    var defenderAttack;
    var defenderHP;
    var defenderCounterAttack;

    $('.char-img').click(function() {

        if (heroSet < 0 || defenderSet < 0) {


            if (heroSet < 0) {

                $('#user').append($(this).addClass('hero'));
                $('#enemies').append($('.starter').children());
                console.log($('.hero').attr('id'));
                heroSet++;

            } else if (heroSet >= 0 && defenderSet < 0) {

                $('#computer').append($(this).addClass('defender'));
                defenderSet++;
                console.log($('.defender').attr('id'));

            }
        }
    });

    // Attack button calls a combat function

    $("attack").click(function() {
        combat();
    });
});
