
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('fast');
});
$(document).ready(function() {



    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        direction: 'horizontal',
        verticalCentered: false,
        sectionsColor: ['#323232', '#fff', '#323232', '#fff', '#323232', '#fff'],
        anchors: ['main', 'services', 'works', 'team', 'blog', 'contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: false,
            // {
            // 'textColor': '#000',
            // 'bulletsColor': '#000',
            // 'position': 'right',
            // 'tooltips': ['section1', 'section2', 'section3', 'section4']
        // },
        normalScrollElements: '.section-scroll_wrapper, .onework-modal',
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });

    $('#hmbrgr').click(function(){
        $(this).toggleClass('open');
        $('.myMenu-list').toggleClass('myMenu-mob');
        $('.myMenu-item').click(function(){
            $('.myMenu-list').removeClass('myMenu-mob');
            $('#hmbrgr').removeClass('open');
        });
        $('section').click(function(){
            $('.myMenu-list').removeClass('myMenu-mob');
            $('#hmbrgr').removeClass('open');
        });
    });

    
    $('.first-work').click(function(){
        $('.onework-modal.works_content').addClass('active');
        $('body').addClass('fixed');
    });
    $('.close-onework').click(function(){
        $('.onework-modal.works_content').removeClass('active');
        $('body').removeClass('fixed');
    });
    $('.call').click(function(){
        $('.callback-modal').addClass('active');
        $('body').addClass('fixed');
    });
    $('.close-callback').click(function(){
        $('.callback-modal').removeClass('active');
        $('body').removeClass('fixed');
    });
    // $('body.fixed').click(function(){
    //     $('.onework-modal.works_content').removeClass('active');
    //     $('body').removeClass('fixed');
    // });
});