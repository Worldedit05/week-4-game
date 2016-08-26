$(document).ready(function() {


    var character1 = {
        attack: 8,
        HP: 150,
        counterAttack: 15
    }
    var character2 = {
        attack: 8,
        HP: 120,
        counterAttack: 10
    }
    var character3 = {
        attack: 8,
        HP: 100,
        counterAttack: 20
    }
    var character4 = {
        attack: 8,
        HP: 140,
        counterAttack: 11
    }
    var character5 = {
        attack: 8,
        HP: 130,
        counterAttack: 9
    }


    // $('#character1').attr({'data-attack':8, 'data-HP':150, 'data-counterAttack':25}).append('<h3>Health: ' + 150 + '</h3>');
    // $('#character2').attr({'data-attack':8, 'data-HP':120, 'data-counterAttack':20}).append('<h3>Health: ' + 120 + '</h3>');
    // $('#character3').attr({'data-attack':8, 'data-HP':100, 'data-counterAttack':30}).append('<h3>Health: ' + 100 + '</h3>');
    // $('#character4').attr({'data-attack':8, 'data-HP':140, 'data-counterAttack':22}).append('<h3>Health: ' + 140 + '</h3>');
    // $('#character5').attr({'data-attack':8, 'data-HP':130, 'data-counterAttack':18}).append('<h3>Health: ' + 130 + '</h3>');

    function startUp() {

        $('#character1').attr({ 'data-attack': character1.attack, 'data-HP': character1.HP, 'data-counterAttack': character1.counterAttack }).find('h3').replaceWith('<h3>Health: ' + character1.HP + '</h3>');
        $('#character2').attr({ 'data-attack': character2.attack, 'data-HP': character2.HP, 'data-counterAttack': character2.counterAttack }).find('h3').replaceWith('<h3>Health: ' + character2.HP + '</h3>');
        $('#character3').attr({ 'data-attack': character3.attack, 'data-HP': character3.HP, 'data-counterAttack': character3.counterAttack }).find('h3').replaceWith('<h3>Health: ' + character3.HP + '</h3>');
        $('#character4').attr({ 'data-attack': character4.attack, 'data-HP': character4.HP, 'data-counterAttack': character4.counterAttack }).find('h3').replaceWith('<h3>Health: ' + character4.HP + '</h3>');
        $('#character5').attr({ 'data-attack': character5.attack, 'data-HP': character5.HP, 'data-counterAttack': character5.counterAttack }).find('h3').replaceWith('<h3>Health: ' + character5.HP + '</h3>');
        $('.defender').removeClass('defender');
  		$('.hero').removeClass('hero');
    }

    // Might need a function that resolves combat
    // and adjusts stats for the "grind" also 
    // needs to start listening again for the
    // next combat

    function combat() {

        heroAttack = $('.hero').attr('data-attack');
        heroHP = $('.hero').attr('data-HP');
        heroCounterAttack = $('.hero').attr('data-counterAttack');
        defenderAttack = $('.defender').attr('data-attack');
        defenderHP = $('.defender').attr('data-hp');
        defenderCounterAttack = $('.defender').attr('data-counterAttack');

        // Increase the player's attack by base 8

        heroAttack = parseInt(heroAttack) + 8;

        // Attacker reduces defender's health with attack

        defenderHP = defenderHP - heroAttack;
        $('.defender').attr({ 'data-attack': defenderAttack, 'data-HP': defenderHP, 'data-counterAttack': defenderCounterAttack });
        $('.defender').find('h3').replaceWith('<h3>Health: ' + defenderHP + '</h3>');

        // Defender reduces attacker's health with counterAttack

        heroHP = heroHP - defenderCounterAttack;
        $('.hero').attr({ 'data-attack': heroAttack, 'data-HP': heroHP, 'data-counterAttack': heroCounterAttack });
        $('.hero').find('h3').replaceWith('<h3>Health: ' + heroHP + '</h3>');

        // Check to see if the player's hp is 0 (lose condition)

        if (heroHP <= 0) {

            $('.message').html('<h2>Game Over!</h2>');
            $('#reset').show();

        }
        // Check to see if the defender's hp is 0
        else if (defenderHP <= 0) {
            // If the defender's hp is 0, are there any enemies left?
            if ($('#enemies').children().length == 0) {
                // If no than game over (won condition)
                $('.message').html('<h2>You Win! Game Over!</h2>');
                $('#reset').show();
            } else {
                // If yes than select another defender
                $('.message').html('<h2>Defender Defeated! Pick another opponent <--- </h2>');
                $('.hidden').append($('.defender').removeClass('defender'));
                defenderSet = -1;
            }
        }
    }

    function reset() {
        heroSet = -1;
        defenderSet = -1;

        startUp();

        $('.starter').append($('.char-img'));
        $('.message').empty();
        $('#reset').hide();

    }

    // Listen for the user clicks to capture 
    // the selection of a character and move 
    // it to the appropriate area 

    var heroSet = -1;
    var defenderSet = -1;

    // var heroAttack;
    // var heroHP;
    // var heroCounterAttack;

    // var defenderAttack;
    // var defenderHP;
    // var defenderCounterAttack;

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

    $("#button").click(function() {
        combat();
    });

    $('#reset').click(function() {
        reset();
    });

    $('#reset').hide();
    startUp();
});
