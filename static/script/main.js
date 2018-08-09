$(document).ready(function(){
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
})