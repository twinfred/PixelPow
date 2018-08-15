$(document).ready(function(){
// Scrolling Hyperlinks
    function scrollToAnchor(anchor){
        $("html, body").animate({
            scrollTop: $(anchor).offset().top
        }, 800);
    }
    // Desktop Nav Menu Links
    $('.menu-link').find('a').click(function(e){
        e.preventDefault();
        let anchor_tag = $(this).attr('href');
        scrollToAnchor(anchor_tag);
    })
    // Popout Nav Menu Links
    $('#menu-popout').find('a').click(function(e){
        e.preventDefault();
        hidePopoutMenu();
        let anchor_tag = $(this).attr('href');
        scrollToAnchor(anchor_tag);
    })
    // Footer Btn
    $('#back2top-btn').click(function(){
        scrollToAnchor('#sticky-nav');
    })

// POPOUT MENU
    // Show Popout Menu
    $('#menu-icon-img').click(function(){
        $('#menu-popout').show("slide", {direction: "right"}, function(){
            $('#site-dim').fadeIn(function(){
                $('#menu-x').fadeIn('slow');
            });
        });
    })

    // Hide Popout Menu
    function hidePopoutMenu(){
        $('#menu-x').fadeOut('fast', function(){
            $('#menu-popout').hide("slide", {direction: "right"}, function(){
                $('#site-dim').fadeOut();
            });
        });
    }
    $('#site-dim').click(function(){
        hidePopoutMenu();
    })
    $('#menu-x').click(function(){
        hidePopoutMenu();
    })

// HERO IMAGE SLIDER
    const desktop_hero_images = ['/img/heroslider1.png','/img/heroslider2.png','/img/heroslider3.png'];
    const mobile_hero_images = ['/img/mobile_heroslider1.png','/img/mobile_heroslider2.png','/img/mobile_heroslider3.png'];
    var hero_images = [];
    var curr_img = 0;
    const img_cnt = 3;

    var windowSize = window.innerWidth;
    setHeroImages();

    function setHeroImages(){
        hero_images = windowSize > 767.5 ? desktop_hero_images : mobile_hero_images;
        $('#hero-slider-img').css('background-image', 'url('+hero_images[curr_img]+')');
    }

    window.addEventListener('resize', function(){
        windowSize = window.innerWidth;
        setHeroImages();
    })

    // Auto Rotate
    var myTimer = setInterval(function(){
        changeHeroImg(curr_img + 1);
    }, 6000)

    // Reset Auto Rotate Timer
    function resetHeroTimer(){
        clearInterval(myTimer);
        myTimer = setInterval(function(){
            changeHeroImg(curr_img + 1);
        }, 6000)
    }

    // Left Arrow Click
    $('#hero-left-arrow').click(function(){
        resetHeroTimer();
        changeHeroImg(curr_img - 1);
    })

    // Right Arrow Click
    $('#hero-right-arrow').click(function(){
        resetHeroTimer();
        changeHeroImg(curr_img + 1);
    })

    // Dot Click
    $('.hero-dot').click(function(){
        resetHeroTimer();
        let dot = $(this).attr('id');
        dot = parseInt(dot[dot.length-1]);
        changeHeroImg(dot);
    })

    function changeHeroImg(go_to_img){
        if(go_to_img == curr_img){
            return;
        }
        resetHeroTimer();
        if(go_to_img >= img_cnt){
            go_to_img = 0;
        }
        if(go_to_img < 0){
            go_to_img = img_cnt - 1;
        }
        $('#hero-slider-img').fadeTo('slow', 0.1, function(){
            $(this).css('background-image', 'url('+hero_images[go_to_img]+')');
            $('#hero-dot-'+curr_img).css('background-image', 'url("/img/dot_black.png")');
            $('#hero-dot-'+go_to_img).css('background-image', 'url("/img/dot_yellow.png")');
            curr_img = go_to_img;
        }).fadeTo('slow', 1);
    }

// TESTIMONIAL SLIDER
    var testimonial = 0;
    const t_count = 3;

    // Left Arrow Click
    $('.testimonial-prev').click(function(){
        changeTestimonial(testimonial - 1, "left");
    })

    // Right Arrow Click
    $('.testimonial-next').click(function(){
        changeTestimonial(testimonial + 1, "right");
    })

    function changeTestimonial(go_to_test, direction){
        if(go_to_test >= t_count){
            go_to_test = 0;
        }
        if(go_to_test < 0){
            go_to_test = t_count - 1;
        }
        $('#testimonial-'+testimonial).hide("slide", {direction: direction}, function(){
            direction = direction == "left" ? "right" : "left";
            $('#testimonial-'+go_to_test).show("slide", {direction: direction});
            testimonial = go_to_test;
        });
    }
})