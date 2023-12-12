console.log("Site CSS loaded");



    $("#msd-nav-mobile").unbind('click');

    $("#msd-nav-mobile").click(function () {
        console.log("msd-toggle-mobile");
        $("#msd-nav-mobile-dropdown").toggle("blind", function () {
            // Animation complete.
        });
    });

    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("#msd-social-bar").addClass('opacity-100');
            $("#msd-social-bar").removeClass('opacity-0');
            $("#msd-header").removeClass('lg:h-48');
            $("#msd-header").addClass('lg:h-0');
            //$( "#msd-header-content" ).addClass('lg:hidden');



        }
        else {
            $("#msd-social-bar").addClass('opacity-0');
            $("#msd-social-bar").removeClass('opacity-100');
            $("#msd-header").removeClass('lg:h-0');
            $("#msd-header").addClass('lg:h-48');
            //$( "#msd-header-content" ).removeClass('lg:hidden');



        }

    });


