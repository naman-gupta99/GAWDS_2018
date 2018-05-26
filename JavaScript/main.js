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

  // get the page to the top after every refresh
  $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
  });

  window.setTimeout(function(){
    document.querySelector('body').style.overflowY = "auto"
  },6000);

  function cloudAnimation(){
    var time = new TimelineMax({paused:true});

    time
      .to($('#clouds object'),20,{
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

  function planeAnimation(p1){

    var time = new TimelineMax({paused:true});

    time
      .to(plane,3,{
        rotation:20
      })
      .to(plane,3,{
        rotation:0
      })
      .to(plane,3,{
        rotation:-20
      })
      .to(plane,3,{
        rotation:0
      })
      .to(plane,3,{
        rotation:20
      })
      .to(plane,3,{
        rotation:0
      })
      .to(plane,3,{
        rotation:-20
      })
      .to(plane,3,{
        rotation:0
      })
      .to(plane,3,{
        rotationX:"5"
      })
      .to(plane,10,{
        top:"80%",
        rotationX:"10"
      })
      .to(plane,1,{
        rotationX:"0"
      })


    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:2*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
  planeAnimation();

  function frontLogoAnimation(){
    var css = $('.css');
    var html = $('.html');
    var js = $('.js');
    var fog = $('.fog');
    var frontPath = $('.frontpoly svg g path');

    var time = new TimelineMax({paused:true});

    time
      .to(css,10,{
        top:"50%",
        left:"50%",
        yPercent:50,
        xPercent:-50,
        ease: Bounce.easeOut,
      })
      .to(html,10,{
        top:"50%",
        left:"50%",
        yPercent:50,
        xPercent:50,
        ease: Bounce.easeOut,
      },"-=10")
      .to(js,10,{
        top:"50%",
        left:"50%",
        yPercent:-50,
        ease: Bounce.easeOut,
      },"-=10")
      .to([css,html,js],3,{
        autoAlpha:0
      },"-=2")
      .to(fog,10,{
        opacity:0.8
      },"-=7")
      .to(fog,10,{
        opacity:0
      },"+=2")
      .staggerTo(frontPath,2,{
        scale:1,
        transformOrigin:"center center",
        ease:Elastic.easeOut
      },0.05,"-=5")
      .staggerTo(frontPath,10,{
        x:"10%",
        y:"-10%",
        transformOrigin:"center center",
        ease:Elastic.easeOut
      },0.01)
      .to(frontPath,1,{
        autoAlpha:0
      },"-=10")
      .to(plane,2,{
        rotationX:-20
      })
      .to(plane,5,{
        top:"50%",
        left:"50%",
        rotationX:0
      })


    var scene =new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:5*wHeight,
      offset:2*wHeight
    })
    .setTween( time.play() )
    .addTo(controller);
  }
  frontLogoAnimation();

  function backLogoAnimation(){
    var nodejs = $('.nodejs');
    var django = $('.django');
    var sql = $('.sql');
    var firebase = $('.firebase');
    var backPath = $('.backpoly svg path');
    var portalWhole = $('.portalWhole');

    var time = new TimelineMax({paused:true});

    time
      .to(nodejs,5,{
        scale:1,
        top:"30%"
      })
      .to(nodejs,5,{
        autoAlpha:0
      })
      .to(django,5,{
        scale:1,
        top:"30%"
      },"-=5")
      .to(django,5,{
        autoAlpha:0
      })
      .to(sql,5,{
        top:"30%",
        scale:1
      },"-=5")
      .to(sql,5,{
        autoAlpha:0
      })
      .to(firebase,5,{
        top:"30%",
        scale:1
      },"-=5")
      .to(firebase,10,{
        rotationY:900,
        ease:Power2.easeIn
      })

      .to(plane,0.5,{
        rotation:-20
      },"-=7")
      .to(plane,5,{
        left:"10%",
        rotation:-360
      })

      .to(firebase,5,{
        autoAlpha:0
      },"-=5")

      .to(portalWhole,5,{
        scale:1
      })

      .staggerTo(backPath,2,{
        scale:1,
        transformOrigin:"center center",
        ease: RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 1,
          points: 20,
          taper: "none",
          randomize: true,
          clamp: false
        })
      },0.03)
      .staggerTo(backPath,10,{
        x:"-10%",
        y:"10%",
        transformOrigin:"center center",
        ease:Elastic.easeOut
      },0.01,"+=5")
      .to(backPath,5,{
        autoAlpha:0
      },"-=10")




      var scene = new ScrollMagic.Scene({
        triggerHook:0,
        triggerElement:bdy,
        duration:5*wHeight,
        offset:7*wHeight
      })
      .setTween(time.play())
      .addTo(controller);
  }
  backLogoAnimation();

  function portalAnimation(){

    var portal = $('.portal');

    var time = new TimelineMax();

    time
      .to(plane,0.1,{
        rotation:0
      })
      .to(plane,1,{
        rotation:20
      })
      .to(plane,5,{
        left:"50%",
        rotation:0
      })
      .to(plane,5,{
        rotationX:10
      })
      .to(portal,10,{
        scale:10
      })
      .staggerFromTo(".stream>div",5,{
          rotationY:"90deg",
          z:"-5000vh",
          opacity:0
        },{
          rotationY:"90deg",
          z:"600vh",
          opacity:1
        },0.5,"-=10")
      .staggerFromTo(".stream>div",5,{
          rotationY:"90deg",
          z:"-5000vh",
          opacity:0
        },{
          rotationY:"90deg",
          z:"600vh",
          opacity:1
        },0.5)

      .to(".stream>div",1,{
        autoAlpha:0
      })
      .to($('.whitedot'),10,{
        scale:500,
        transformOrigin:'50% 50%'
      })
      .to(plane,5,{
        rotationX:0
      })

      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:5*wHeight,
        offset:12*wHeight
      })
      .setTween(time.play())
      .addTo(controller);


  }
  portalAnimation();

  // function demo(){
  //   var portal = $('.portal');
  //
  //   var time = new TimelineMax();
  //
  //   time
  //     .to(portal,10,{
  //       scale:10,
  //       transformOrigin:"center center"
  //     })
  // }
  // demo();

  // function emerge(){
  //   var time = new TimelineMax({paused:true});
  //
  //   time
  //     .to(wormhole,0.1,{
  //       left:"80%",
  //       top:"20%"
  //     })
  //     .to(wormhole,1,{
  //       scale:1
  //     })
  //     .to([$("#lwing"),$("#rwing")],0.1,{
  //       borderBottom:"50px solid green"
  //     })
  //     .to(plane,0.1,{
  //       left:"80%",
  //       top:"20%"
  //     })
  //     .to(plane,1,{
  //       rotation:0,
  //       scale:1
  //     })
  //     .to(wormhole,0.5,{
  //       rotationY:90,
  //       rotationX:-90,
  //       autoAlpha:0,
  //       scale:0,
  //       onComplete:rest
  //     });
  //
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement:bdy,
  //     triggerHook:0,
  //     duration:wHeight,
  //     offset:3*wHeight
  //   })
  //   .setTween(time.play())
  //   .addTo(controller);
  // }
  //
  // function rest(){
  //   var time = new TimelineMax({paused:true});
  //
  //   time
  //     .to(plane,1,{
  //     rotationX:10,
  //     rotation:-10
  //     })
  //     .to(plane,5,{
  //       left:"50%",
  //       top:"50%",
  //     })
  //     .to(plane,1,{
  //       rotationX:0,
  //       rotation:0
  //     })
  //     .to(plane,10,{
  //       delay:2,
  //       scale:0.7,
  //       top:"40%",
  //       rotationX:-20
  //     })
  //     .to(plane,10,{
  //       scale:0.5,
  //       rotationX:0
  //     })
  //     .to(plane,10,{
  //       delay:5,
  //       left:"20%",
  //       rotation:-360,
  //       transformOrigin:"50% 100%"
  //     })
  //
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement:bdy,
  //     triggerHook:0,
  //     duration:wHeight,
  //     offset:4*wHeight
  //   })
  //   .setTween(time.play())
  //   .addTo(controller);
  // }
  //

  // function nextToBack(){
  //   console.log('kartik')
  //   var time = new TimelineMax({paused:true});
  //
  //   time
  //     .to(plane,1,{
  //       top:"70%",
  //       left:"10%"
  //     })
  //     .to([$("#lside"),$("#rside")],1,{
  //       borderRight:"100px solid red"
  //     })
  //     .to(plane,5,{
  //       rotation:360,
  //       scale:1
  //     })
  //     .to(wormhole,5,{
  //       scale:0,
  //       autoAlpha:0
  //     })
  //     .to(plane,5,{
  //       rotationX:-20,
  //       rotationY:-20
  //     })
  //     .to(plane,10,{
  //       left:"50%",
  //       top:"50%"
  //     })
  //     .to(plane,5,{
  //       rotationX:0,
  //       rotationY:0
  //     })
  //     .to(plane,0.5,{
  //       rotation:0
  //     })
  //     .to(plane,2,{
  //       rotation:20
  //     })
  //     .to(plane,2,{
  //       rotation:0
  //     })
  //     .to(plane,2,{
  //       rotation:-20
  //     })
  //     .to(plane,2,{
  //       rotation:0
  //     })
  //     .to(plane,2,{
  //       rotation:20
  //     })
  //     .to(plane,2,{
  //       rotation:0
  //     })
  //     .to(plane,2,{
  //       rotation:-20
  //     })
  //     .to(plane,2,{
  //       rotation:0
  //     });
  //
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement:bdy,
  //     triggerHook:0,
  //     duration:wHeight,
  //     offset:5.5*wHeight
  //   })
  //   .setTween(time.play())
  //   .addTo(controller);
  // }
  //
  // function graphicsAnimation(){
  //   var illus = $(".illustrator");
  //   var pts = $(".photoshop");
  //   var draw = $(".draw");
  //
  //
  //   var time = new TimelineMax({paused:true});
  //
  //   time
  //     .to(illus,5,{
  //       top:"50%",
  //       yPercent:-100
  //     })
  //     .to(draw,5,{
  //       left:"50%",
  //       xPercent:-100
  //     },"-=5")
  //     .to(pts,5,{
  //       left:"50%",
  //       xPercent:100
  //     },"-=5")
  //     .to(illus,5,{
  //       bezier:{
  //         curviness:1,values:[
  //           {xPercent:0,yPercent:-100},{xPercent:100,yPercent:0},{xPercent:0,yPercent:100},{xPercent:-100,yPercent:0},{xPercent:0,yPercent:-100}
  //         ]
  //     }
  //     })
  //     .to(draw,5,{
  //       bezier:{
  //         curviness:1,values:[
  //           {xPercent:-100,yPercent:0},{xPercent:0,yPercent:-100},{xPercent:100,yPercent:0},{xPercent:0,yPercent:100},{xPercent:-100,yPercent:0}
  //         ]
  //       }
  //     },"-=5")
  //     .to(pts,5,{
  //       bezier:{
  //         curviness:1,values:[
  //           {xPercent:100,yPercent:-0},{xPercent:0,yPercent:100},{xPercent:-100,yPercent:0},{xPercent:0,yPercent:-100},{xPercent:100,yPercent:0}
  //         ]
  //       }
  //     },"-=5")
  //     .to([illus,pts,draw],5,{
  //       scale:0
  //     },"-=5")
  //     .to(wormhole,5,{
  //       autoAlpha:1,
  //       scale:1
  //     },"-=5");
  //
  //     var scene = new ScrollMagic.Scene({
  //       triggerElement:bdy,
  //       triggerHook:0,
  //       duration:2*wHeight
  //     })
  //     .setTween(time.play())
  //     .addTo(controller);
  // }
  // graphicsAnimation();
});
