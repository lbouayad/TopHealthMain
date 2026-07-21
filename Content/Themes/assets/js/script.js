(function() {

    "use strict";

    var SaaSio = {
        init: function() {
            this.Basic.init();
        },

        Basic: {
            init: function() {

                this.SaaSCMobileMenu();
                //this.SaaSCOnePageNav();
                this.axilHover();
                this.conter();
            },


            SaaSCMobileMenu: function() {
                $('.s2-open_mobile_menu').on("click", function() {
                    $('.s2-mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.s2-open_mobile_menu').on('click', function() {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if ($('.s2-mobile_menu li.dropdown ul').length) {
                    $('.s2-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.s2-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
            },

            axilHover: function() {
                $('.axil-service').mouseenter(function() {
                    var self = this;
                    $(self).removeClass('axil-control');
                    setTimeout(function() {
                        $('.axil-service-area .active').removeClass('active').addClass('axil-control');
                        $(self).removeClass('axil-control').addClass('active');
                        $('.axil-service.active .inner::before').css('opacity', 0.1);
                    }, 0);

                });
                $('.axil-service').mouseleave(function() {
                    var self = this;
                    $(self).removeClass('active');
                    setTimeout(function() {
                        $(self).removeClass('active').addClass('axil-control');
                    });

                });
            },
            conter: function() {
                $('.count').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                $(".nav-folderized h5").click(function() {
                    $(this).parent(".nav.footer-link").toggleClass("open");
                });

                $(document).ready(function() {
                    $('a[href^="#say-hello-main"]').on('click', function(e) {
                        e.preventDefault();

                        var target = this.hash;
                        var $target = $(target);

                        $('html, body').stop().animate({
                            'scrollTop': $target.offset().top
                        }, 800, 'swing', function() {
                            window.location.hash = target;
                        });
                    });
                });
            }
            /* End Of js
            ================================================*/
        }
    }
    jQuery(document).ready(function() {
        SaaSio.init();
    });

})();