$(function(){
  var container = $('.container')
  //     bdy = $('body'),
  //     cnWidth = container.width(),
  //     cnHeight = container.height(),
  //     wWidth = window.innerWidth,
  //     wHeight = window.innerHeight,
  //     pos = container.position();
  //     middleSide = wWidth/2 - cnWidth/2,
  //     rightSide = wWidth - 2*cnWidth,
  //     leftSide =  cnWidth,
  //     topSide = "5%",
  //     centerSide = (cnHeight + wHeight)/2 - cnHeight;
  //     bottomSide = wHeight - 2*cnHeight;
  //
  // console.log(cnWidth,cnHeight,wWidth,wHeight,pos);

  // TweenMax.set(container,{
    // position:'fixed',
    // top:0,
    // left:0,
    // bottom:0,
    // right:0,
    // margin:'auto',
    // transform:'rotateY(-90deg) rotateX(-20deg)',
    // transformStyle:"preserve-3d",
    // width:'50px',
    // height:'50px',
    // transformOrigin:"center center 100%"
  // })
  // TweenMax.to('#plane',10,{
  //   // rotation:"0"
  //   rotationX:360,
  //   transformOrigin:"100% 100%",
  //   delay:12
  // })

  TweenMax.to('object',20,{
    scale:1.2,
    delay:5,
    repeat:-1,
    yoyo:true
  });

  TweenMax.fromTo("#lw1",0.5,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#lw2",1.2,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#lw3",1,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#rw1",0.5,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#rw2",1,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#rw3",1.2,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })

  TweenMax.fromTo("#rw4",0.8,{
    rotationY:"90deg",
    z:"-10000vh",
    repeat:-1,
    opacity:1,
    delay:6
  },{
    rotationY:"90deg",
    z:"500vh",
    repeat:-1,
    opacity:1,
    delay:6
  })
});

// (function give(){
//   var wWidth = window.innerWidth;
//   var wHeight = window.innerHeight;
//   var position = $('.container').position();
//   setTimeout(function(){
//     console.log(position);
//   },2000);
// })();
// var container = $('.container')[0];
// var rect = container.getBoundingClientRect();
// console.log(rect.top);
// setInterval(function(){
//   console.log(container.position.left)
// },1000)

// window.onresize = function(){
// console.log(window.innerWidth);
// }

// var cont = $('.container')[0];
// var rect = cont.getBoundingClientRect();
// console.log(cont.clientHeight,cont.clientWidth,rect.top,rect.rightSide,rect.bottom,rect.left)
