$(document).ready(function() {

  var tl = new TimelineLite();

  tl
    .to($('#deskimage'), 5, {top:"-25vw", left:"-50vw", height:"85vw", width:"168vw", delay:0.2})
    .to($('#deskimage'), 4.5, {top:"8vw", left:"43vw", height:"27vw", width:"54vw", ease:Power1.easeOut})
    .to($('#deskcircle'), 5, {width:"40vw", height:"40vw", borderradius:"40vw", top:"3vw", left:"53vw", delay:-4.5, ease:Power0.easeOut})
});






//top 98vw; left 68vw; height 27vw; width 54vw
