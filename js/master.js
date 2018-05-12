var rotate = anime({
  targets: '#lineDrawing',
  translateY: -130,
  scale: .8,
  delay: 4600

});

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',

  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2200,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false,
  fill:'rgba(255, 255, 255, 1)',


});

var timeline = anime.timeline();

  timeline
  .add({
  targets:'#subtitle .textFx',
  opacity: [
      { value: [0, 1], duration: 300, easing: 'easeOutQuad' }
  ],
  translateY: -100,
  easing: 'easeOutQuad',
  delay: 4800,

});

var timelineIcons = anime.timeline();
  timelineIcons
  .add({
  targets:'#iconList .facebook',

  opacity: [
      { value: [0, 1], duration: 300, easing: 'easeOutQuad' }
  ],
  translateY: -40,
  easing: 'easeOutQuad',
  rotate: '4turn',
  offset: '-=1000',
  delay: 7000
})
  .add({
  targets:'#iconList .twitter',
  opacity: [
      { value: [0, 1], duration: 300, easing: 'easeOutQuad' }
  ],
  translateY: -40,
  easing: 'easeOutQuad',
  rotate: '4turn',
  offset: '-=1200',
  delay: 600

})
  .add({
  targets:'#iconList .github',
  opacity: [
      { value: [0, 1], duration: 300, easing: 'easeOutQuad' }
  ],
  translateY: -40,
  easing: 'easeOutQuad',
  rotate: '4turn',
  offset: '-=700',
})
  .add({
  targets:'#iconList .instagram ',
  opacity: [
      { value: [0, 1], duration: 300, easing: 'easeOutQuad' }
  ],
  translateY: -40,
  easing: 'easeOutQuad',
  rotate: '4turn',
  offset: '-=640',

});

var educationDraw = anime({
  targets: '#education path',
 strokeDashoffset: [anime.setDashoffset, 0],
 easing: 'easeInOutSine',
 duration: 1500,
 delay: function(el, i) { return i * 250 },
 direction: 'alternate',
 loop: true
});

//************ Scroll Reveal *************************//
window.sr = ScrollReveal({reset: true});

sr.reveal('.textTest',{
  opacity: 1,
  duration: 300,
});


var morphing = anime({
  targets: '#buttonView .linesButton .st5',
  points: [
    { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true
});

/*------------- Chart.js ---------------------*/
$(document).ready(function(){
    $("#html").mouseenter(function(){
      $('.fa-html5').addClass('animated pulse');
    });
    $("#html").mouseleave(function(){
      $('.fa-html5').removeClass('animated pulse');
    });

    $("#css").mouseenter(function(){
      $('.fa-css3-alt').addClass('animated pulse');
    });
    $("#css").mouseleave(function(){
      $('.fa-css3-alt').removeClass('animated pulse');
    });

    $("#js").mouseenter(function(){
      $('.fa-js-square').addClass('animated pulse');
    });
    $("#js").mouseleave(function(){
      $('.fa-js-square').removeClass('animated pulse');
    });

    $("#mobile").mouseenter(function(){
      $('.fa-mobile').addClass('animated pulse');
    });
    $("#mobile").mouseleave(function(){
      $('.fa-mobile').removeClass('animated pulse');
    });

});
