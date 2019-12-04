/**
 * Created by EZAZ on 11/26/2016.
 */
(function ($) {
    "use strict";

    $(window).load(function(){
        $('#loading').fadeOut(1500);
        $('#into-logo').addClass('animated fadeInDown');

    });
    $(document).ready(function() {



        /* Scrolling Smoothly
         * ----------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });

/*Product
* ---------------------------------------------------------------------------------------------------------*/
        jQuery(function($){
        /* activate jquery isotope */
        $('.portfolio_items').isotope({
            itemSelector : '.item',
            layoutMode:'fitRows'
        });



        // filter items on button click
        $('.portfolio_filter li').click(function() {

            $('.portfolio_filter li').removeClass("active");

            $(this).addClass("active");

            var selector=$(this).attr('data-filter');

            $(".portfolio_items").isotope({

                filter:selector,
                animationOptions:{

                    duration:750,
                    easing:'linear',
                    queue:false
                }
            });

            return false;


        });
        });



        /*portfolio
         * -----------------------------------------------------------------------------*/
        $(".single-portfolio").hover(function(){
            $('.portfolio-overlay', this)
                .addClass('animated fadeIn visible')
                .show();
        });

        $(".single-portfolio").mouseleave(function(){
            $('.portfolio-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });




        /*test
        * ------------------------------------------------------------------------------------*/

        jQuery(function($){
            // fancybox
            $(".fancybox").fancybox({
                modal: true, // disable regular nav and close buttons
                // add buttons helper (requires buttons helper js and css files)
                helpers: {
                    buttons: {}
                }
            });
        }); // ready

        jQuery(function ($) {
            // fancybox
            $(".fancybox").fancybox({
                modal: true, // disable regular nav and close buttons
                // add buttons helper (requires buttons helper js and css files)
                helpers: {
                    buttons: {}
                }
            });
            // filter selector
            $(".filter").on("click", function () {
                var $this = $(this);
                // if we click the active tab, do nothing
                if ( !$this.hasClass("active") ) {
                    $(".filter").removeClass("active");
                    $this.addClass("active"); // set the active tab
                    // get the data-rel value from selected tab and set as filter
                    var $filter = $this.data("rel");
                    // if we select view all, return to initial settings and show all
                    $filter == 'all' ?
                        $(".fancybox")
                            .attr("data-fancybox-group", "gallery")
                            .not(":visible")
                            .fadeIn()
                        : // otherwise
                        $(".fancybox")
                            .fadeOut(0)
                            .filter(function () {
                                // set data-filter value as the data-rel value of selected tab
                                return $(this).data("filter") == $filter;
                            })
                            // set data-fancybox-group and show filtered elements
                            .attr("data-fancybox-group", $filter)
                            .fadeIn(1000);
                } // if
            }); // on
        }); // ready


        /*test
         * ------------------------------------------------------------------------------------*/











    });

})(jQuery);