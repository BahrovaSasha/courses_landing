$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: ['#323232', '#fff', '#323232', '#fff', '#323232', '#fff'],
        anchors: ['main', 'services', 'works', 'team', 'blog', 'contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
            // {
            // 'textColor': '#000',
            // 'bulletsColor': '#000',
            // 'position': 'right',
            // 'tooltips': ['section1', 'section2', 'section3', 'section4']
        // },
        normalScrollElements: null,
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

        
    });
    // $('call').click(function(){
    //     $('callback-modal').toggleClass('active');
    // });
});