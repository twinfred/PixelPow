$(document).ready(function(){

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
    var img_cnt = 3;

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
        resetHeroTimer();
        if(go_to_img == curr_img){
            return;
        }
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
})