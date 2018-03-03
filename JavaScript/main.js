$(function(){
  var plane = $('#plane'),
      bdy = $('body'),
      controller = new ScrollMagic.Controller(),
      wormhole = $('.portal'),
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
        left:"15%"
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

  function frontLogoAnimation(){
    var cssl = $('.css');
    var htmll = $('.html');
    var jsl = $('.js');

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
        rotation:360,
        scale:0
      })

      .to(wormhole,2,{
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
  frontLogoAnimation();

  function emerge(){
    var time = new TimelineMax({paused:true});

    time
      .to(wormhole,0.1,{
        left:"80%",
        top:"20%"
      })
      .to(wormhole,1,{
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
        rotation:0,
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
      })
      .to(plane,10,{
        delay:2,
        scale:0.7,
        top:"40%",
        rotationX:-20
      })
      .to(plane,10,{
        scale:0.5,
        rotationX:0
      })
      .to(plane,10,{
        delay:5,
        left:"20%",
        rotation:-360,
        transformOrigin:"50% 100%"
      })

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:wHeight,
      offset:4*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }

  function backLogoAnimation(){
    var nodejs = $('.nodejs');
    var django = $('.django');
    var sql = $('.sql');
    var firebase = $('.firebase');

    var time = new TimelineMax({paused:true});

    time
      .fromTo(nodejs,5,{
        autoAlpha:1,
        scale:0,
        top:"-10%"
      },{
        scale:1,
        top:"30%"
      })
      .fromTo(nodejs,5,{
        autoAlpha:1
      },{
        autoAlpha:0
      })
      .fromTo(django,5,{
        autoAlpha:1,
        scale:0,
        top:"-10%"
      },{
        scale:1,
        top:"30%"
      },"-=5")
      .fromTo(django,5,{
        autoAlpha:1
      },{
        autoAlpha:0
      })
      .fromTo(sql,5,{
        autoAlpha:1,
        scale:0,
        top:"-10%"
      },{
        top:"30%",
        scale:1
      },"-=5")
      .fromTo(sql,5,{
        autoAlpha:1
      },{
        autoAlpha:0
      })
      .fromTo(firebase,5,{
        autoAlpha:1,
        scale:0,
        top:"-10%"
      },{
        top:"30%",
        scale:1
      },"-=5")
      .fromTo(firebase,10,{
        rotationY:0
      },{
        rotationY:1800,
        ease:Power2.easeIn
      })
      .fromTo(firebase,5,{
        autoAlpha:1
      },{
        autoAlpha:0
      },"-=5")
      .to(wormhole,0.1,{
        top:"30%",
        left:"50%"
      })
      .fromTo(wormhole,5,{
        rotationY:0,
        rotationX:0,
        autoAlpha:0,
        scale:0
      },{
        scale:1,
        autoAlpha:1
      })
      .fromTo(plane,5,{
      },{
        top:"30%",
        left:"50%",
        rotation:0,
        scale:0
      })
      .to(wormhole,5,{
        scale:0,
        autoAlpha:0,
        top:"30%",
        left:"50%"
      })
      .fromTo(wormhole,1,{
      },{
        scale:0.5,
        autoAlpha:1,
        top:"70%",
        left:"10%",
        onComplete:nextToBack
      })

      var scene = new ScrollMagic.Scene({
        triggerHook:0,
        triggerElement:bdy,
        duration:1.5*wHeight,
        offset:4*wHeight
      })
      .setTween(time.play())
      .addTo(controller);
  }
  backLogoAnimation();

  function nextToBack(){
    console.log('kartik')
    var time = new TimelineMax({paused:true});

    time
      .to(plane,1,{
        top:"70%",
        left:"10%"
      })
      .to([$("#lside"),$("#rside")],1,{
        borderRight:"100px solid red"
      })
      .to(plane,5,{
        rotation:360,
        scale:1
      })
      .to(wormhole,5,{
        scale:0,
        autoAlpha:0
      })
      .to(plane,5,{
        rotationX:-20,
        rotationY:-20
      })
      .to(plane,10,{
        left:"50%",
        top:"50%"
      })
      .to(plane,5,{
        rotationX:0,
        rotationY:0
      })
      .to(plane,0.5,{
        rotation:0
      })
      .to(plane,2,{
        rotation:20
      })
      .to(plane,2,{
        rotation:0
      })
      .to(plane,2,{
        rotation:-20
      })
      .to(plane,2,{
        rotation:0
      })
      .to(plane,2,{
        rotation:20
      })
      .to(plane,2,{
        rotation:0
      })
      .to(plane,2,{
        rotation:-20
      })
      .to(plane,2,{
        rotation:0
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:wHeight,
      offset:5.5*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }

});
