$(document).ready(function() {

    var stats = {
        "character1": {
            "attack": 8,
            "HP": 150,
            "counterAttack": 25
        },
        "character2": {
            "attack": 8,
            "HP": 120,
            "counterAttack": 20
        },
        "character3": {
            "attack": 8,
            "HP": 100,
            "counterAttack": 30
        },
        "character4": {
            "attack": 8,
            "HP": 140,
            "counterAttack": 22
        },
        "character5": {
            "attack": 8,
            "HP": 130,
            "counterAttack": 18
        }
    }

    $('#character1').attr('data-attack', stats.character1.attack).attr('data-HP', stats.character1.HP).attr('data-counterAttack', stats.character1.counterAttack);
    $('#character2').attr('data-attack', stats.character2.attack).attr('data-HP', stats.character2.HP).attr('data-counterAttack', stats.character2.counterAttack);
    $('#character3').attr('data-attack', stats.character3.attack).attr('data-HP', stats.character3.HP).attr('data-counterAttack', stats.character3.counterAttack);
    $('#character4').attr('data-attack', stats.character4.attack).attr('data-HP', stats.character4.HP).attr('data-counterAttack', stats.character4.counterAttack);
    $('#character5').attr('data-attack', stats.character5.attack).attr('data-HP', stats.character5.HP).attr('data-counterAttack', stats.character5.counterAttack);
    
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
