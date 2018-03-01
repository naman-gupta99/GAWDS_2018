$(function(){
  var plane = $('#plane'),
      bdy = $('body'),
      controller = new ScrollMagic.Controller(),
      wHeight = window.innerHeight;
  //     cnWidth = container.width(),
  //     cnHeight = container.height(),
  //     wWidth = window.innerWidth,
  //     pos = container.position();
  //     middleSide = wWidth/2 - cnWidth/2,
  //     rightSide = wWidth - 2*cnWidth,
  //     leftSide =  cnWidth,
  //     topSide = "5%",
  //     centerSide = (cnHeight + wHeight)/2 - cnHeight;
  //     bottomSide = wHeight - 2*cnHeight;
  //
  // console.log(cnWidth,cnHeight,wWidth,wHeight,pos);


  function planeAnimation(p1){

    var time = new TimelineMax({paused:true});

    time
      .to(plane,5,{
        rotation:30,
        rotationX:-30,
        left:"80%",
        top:"20%"
      })
      .to(plane,2,{
        rotationX:0,
        rotation:0
      })
      .to(plane,5,{
        rotation:-30,
        left:"30%"
      })
      .to(plane,1,{
        rotation:5
      })
      .to(plane,2,{
        rotation:-10
      })
      .to(plane,1,{
        rotation:0
      })
      .to(plane,1,{
        rotation:5
      })
      .to(plane,2,{
        rotation:-10
      })
      .to(plane,1,{
        rotation:0
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:2.5*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
  planeAnimation();

  function cloudAnimation(){
    var time = new TimelineMax({paused:true});
    time
      .to('object',20,{
        scale:1.2
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:10*wHeight
    })
    .setTween( time.play())
    .addTo(controller)
  }
  cloudAnimation();

  function windAnimation(){
    var time = new TimelineMax({paused:true});

    time
      .fromTo("#lw1",0.5,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      })

      .fromTo("#lw2",1.2,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=0.5")

      .fromTo("#lw3",1,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1.2")

      .fromTo("#rw1",0.5,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1")

      .fromTo("#rw2",1,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=0.5")

      .fromTo("#rw3",1.2,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1")

      .fromTo("#rw4",0.8,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1.2");

    var height = wHeight * 2;

    for(var i = 0;i < 5;i++,height=wHeight*2){
      height *= i;
      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:2*wHeight,
        offset:height
      })
      .setTween(time.play())
      .addTo(controller);
    }

  }
  windAnimation();

  function wordAnimation(){
    var words = $('.wording');

    TweenLite.to(words,1,{
      opacity:1,
      y:"-=10px",
      delay:5.5
    })

    var time = new TimelineMax({paused:true});

    time
      .to(words,1,{
        opacity:0,
        y:"-=20px"
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:0.5*wHeight,
      reverse:false
    })
    .setTween(time.play())
    .addTo(controller);
  }
  wordAnimation();

  function logoAnimation(){
    var cssl = $('.css');
    var htmll = $('.html');
    var jsl = $('.js');
    var wormhole = $('.wormhole');

    var time = new TimelineMax({paused:true});

    time
      .to(cssl,5,{
        scale:1,
        autoAlpha:1
      })
      .to(cssl,5,{
        left:"50%",
        x:"-50%",
        top:"50%",
        y:"-50%"
      })
      .to(cssl,5,{
        rotation:360,
        scale:0,
        autoAlpha:0
      })

      .to(htmll,5,{
        scale:1,
        autoAlpha:1
      },0)
      .to(htmll,5,{
        top:"50%",
        y:"-50%",
        left:"50%",
        x:"-50%"
      },5)
      .to(htmll,5,{
        rotation:720,
        scale:0,
        autoAlpha:0
      },10)

      .to(jsl,5,{
        scale:1,
        autoAlpha:1
      },0)
      .to(jsl,5,{
        left:"50%",
        x:"-50%",
        top:"50%",
        y:"-50%"
      },5)
      .to(jsl,5,{
        rotation:-360,
        scale:0,
        autoAlpha:0
      },10)

      .to(wormhole,2,{
        scale:1,
        rotation:360,
        autoAlpha:1
      },"-=1")

      .to(plane,5,{
        left:"50%",
        top:"50%",
        rotationX:90,
        rotationY:180,
        scale:0
      })

      .to(wormhole,2,{
        rotationX:90,
        rotationY:90,
        left:"50%",
        top:"50%",
        scale:0,
        onComplete:emerge
      })
    var scene =new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:2*wHeight,
      offset:wHeight
    })
    .setTween( time.play() )
    .addTo(controller);
  }
  logoAnimation();

  function emerge(){
    var wormhole = $('.wormhole')
    var time = new TimelineMax({paused:true});

    time
      .to(wormhole,0.1,{
        left:"80%",
        top:"20%"
      })
      .to(wormhole,1,{
        rotationX:0,
        rotationY:0,
        scale:1
      })
      .to([$("#lwing"),$("#rwing")],0.1,{
        borderBottom:"50px solid green"
      })
      .to(plane,0.1,{
        left:"80%",
        top:"20%"
      })
      .to(plane,1,{
        rotationX:0,
        rotationY:0,
        scale:1
      })
      .to(wormhole,0.5,{
        rotationY:90,
        rotationX:-90,
        autoAlpha:0,
        scale:0,
        onComplete:rest
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:wHeight,
      offset:3*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }

  function rest(){
    var time = new TimelineMax({paused:true});

    time
      .to(plane,1,{
      rotationX:10,
      rotation:-10
      })
      .to(plane,5,{
        left:"50%",
        top:"50%",
      })
      .to(plane,1,{
        rotationX:0,
        rotation:0
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:wHeight/2,
      offset:4*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
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
