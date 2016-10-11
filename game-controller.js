function startGame() {

    //    // JQUERY HOOKS GO DOWN HERE :)
    //     // You will need to use Event Delegation

    new GameManager(function (gm) {
        var cities = gm.getCities();
        var city = gm.getGumshoe().city;
        var budget = gm.getGumshoe().budget;

        cities.forEach(function (city) {
            $('#cities').append(`<button id="${city}">${city}</button>`)
        });
        $('#cities').on('click', 'button', function () {
            gm.flyTo(this.id, update)
        })
        $('#search').on('click', function () {
            gm.checkGuess(victory)
        })

        $('#budget').html(budget);
        $('#current-city').html(city);
        $('#search-cost').html(gm.getSearchCost)
        $('body').on('click', '.city-button', function () {
            gm.flyTo(this.id, function (a) {
                update();
            })
        })

        function victory(victory) {
            if (victory) {
                $('#victory').html(`<h1>You found her!</h1>`)
            } else {
                $('#victory').html(`<h4>Oops try again!!</h4>`)
            }
            update()
         //   updateBudget()
        }
        function update() {
            gm.getGumshoe()
            var city = gm.getGumshoe().city;
            var budget = gm.getGumshoe().budget;
            $('#budget').html(budget);
            $('#current-city').html(city);
            $('#search-cost').html(gm.getSearchCost)
        }
        function updateBudget() {
            var gumshoe = gm.getGumshoe();
            $('#budget').html(gumshoe.budget)
            $('#city').html(gumshoe.city)
        }
       // updateBudget()
    })
}
$('#start').on('click', startGame);