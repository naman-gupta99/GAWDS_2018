$(function(){
  var plane = $('#plane'),
      bdy = $('body'),
      controller = new ScrollMagic.Controller(),
      wHeight = window.innerHeight,
      innerWidth = window.innerWidth;
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

  //get the page to the top after every refresh
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
      duration:4*wHeight
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
      duration:8*wHeight,
      offset:4*wHeight
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

      .to('#innerBackground',5,{
        opacity:1
      })

      .to(portalWhole,5,{
        scale:1
      },"-=5")

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
        duration:8*wHeight,
        offset:12*wHeight
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
        duration:8*wHeight,
        offset:20*wHeight
      })
      .setTween(time.play())
      .addTo(controller);


  }
  portalAnimation();

  // animation for galaxy
  function galaxyAnimation(){

    var time = new TimelineMax({paused:true});

    time
      .to('.galaxy',5,{
        opacity:1
      })
      .to('.galaxy svg',5,{
        opacity:1
      },"-=2")
      .to(".galaxy",10,{
        scale:20
      },"+=5")
      .to(plane,10,{
        scale:0.5,
        rotationX:5
      },"-=5")
      .to(plane,10,{
        scale:1,
        rotationX:0,
        left:"50%"
      })


      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:5*wHeight,
        offset:28*wHeight
      })
      .setTween(time.play())
      .addTo(controller);

  }
  galaxyAnimation();

  function rotatePlanet(){

    TweenMax.to('.group',10,{
      rotationX:20,
      rotationY:20,
      yoyo:true,
      repeat:-1
    });

    var time = new TimelineMax({repeat:-1});

    time

      .to('.icon',10,{
        rotation:360,
        transformOrigin:"50% 50%",
        ease: Power0.easeNone
      })

      .to('#illustrator',10,{
        rotation:360,
        transformOrigin:"50% 50%",
        ease: Power0.easeNone
      },"-=10")

      .to('#draw',10,{
        rotation:-360,
        transformOrigin:"50% 50%",
        ease: Power0.easeNone
      },"-=10")

      .to('#photoshop',10,{
        rotation:720,
        transformOrigin:"50% 50%",
        ease: Power0.easeNone
      },"-=10");
  }
  rotatePlanet();

  function laptopAnimation(){

    if(innerWidth <= '760'){
      var scalePlane = 0.5;
    } else {
      var scalePlane = 0.7;
    }

    var topS = $('#sit')[0].getBoundingClientRect().top;
    var leftS = $('#sit')[0].getBoundingClientRect().left;

    var time = new TimelineMax({paused:true});

    time
      .to('.laptopContainer',5,{
        autoAlpha:1
      })
      .to('.laptop',5,{
        autoAlpha:1
      })
      .to(plane,5,{
        top:topS,
        left:leftS,
        scale:0.5
      })
      .to(plane,5,{
        rotation:0,
        rotationX:20,
        rotationY:"180_ccw",
        scale:scalePlane,
        transformOrigin:"center center"
      },10)
      .to(plane,2,{
        rotationX:5
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:6*wHeight,
      offset:33*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
  laptopAnimation();

  function setPositionAbsolute(){

    var time = new TimelineMax({paused:true});

    time
      .to('#background',10,{
        position:'absolute'
      })
      .to('.wind',10,{
        position:'absolute'
      })
      .to('.frontpoly',10,{
        position:'absolute'
      })
      .to('.backpoly',10,{
        position:'absolute'
      })
      .to('.fog',10,{
        position:'absolute'
      })
      .to('.css',10,{
        position:'absolute'
      })
      .to('.html',10,{
        position:'absolute'
      })
      .to('.js',10,{
        position:'absolute'
      })
      .to('.nodejs',10,{
        position:'absolute'
      })
      .to('.django',10,{
        position:'absolute'
      })
      .to('.sql',10,{
        position:'absolute'
      })
      .to('.firebase',10,{
        position:'absolute'
      })
      .to('.illustrator',10,{
        position:'absolute'
      })
      .to('.draw',10,{
        position:'absolute'
      })
      .to('.photoshop',10,{
        position:'absolute'
      })
      .to('.portalWhole',10,{
        position:'absolute'
      })
      .to('.whitedot',10,{
        position:'absolute'
      })
      .to('.stream',10,{
        position:'absolute'
      })
      .to('.galaxy',10,{
        position:'absolute'
      })
      .to('.galaxy svg',10,{
        position:'absolute'
      })

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:2*wHeight,
      offset:35*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
  // setPositionAbsolute();

  function convertToCircle(){
    var laptopContainer = $('.laptopContainer');
    var laptop = $('.laptop');


    var time = new TimelineMax({paused:true});

    if(innerWidth <= '760'){

      time
        .to('.writtenContent',5,{
          opacity:1
        })
        .to(laptopContainer,10,{
          width:'40vw',
          height:'40vw',
          borderRadius: '40vw'
        })

        .to(laptop,10,{
          scale:0.5
        },"-=10")

        .to(laptopContainer,10,{
          top:"20%"
        });
    } else {
      time
        .to('.writtenContent',5,{
          opacity:1
        })
        .to(laptopContainer,10,{
          width:'40vw',
          height:'40vw',
          borderRadius: '40vw'
        })
        .to(laptop,10,{
          scale:0.5
        },"-=10")

        .to(laptopContainer,10,{
          left:"75%"
        });
    }

    var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:6*wHeight,
        offset:39*wHeight
      })
      .setTween(time.play())
      .addTo(controller);

    var lowerlimit = wHeight*39;
    var upperlimit = wHeight*45;
    var topS;
    var leftS;

    $(window).scroll(function(){
      if(window.pageYOffset > lowerlimit && window.pageYOffset < upperlimit){
          topS = $('#sit')[0].getBoundingClientRect().top;
          leftS = $('#sit')[0].getBoundingClientRect().left;

          $('#plane').css({'top':topS+'px','left':leftS+'px'});
      }
    });

  }
  convertToCircle();

  function contentStart(){
    var time = new TimelineMax();

    time
      .to(plane,10,{
        top:"50%",
        left:"10%",
        zIndex:3,
        rotationY:0,
        rotationX:"-90_ccw",
        rotationZ:180,
        scale:1
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:wHeight,
      offset:46*wHeight
    })
    .setTween(time.play())
    .addTo(controller);
  }
  contentStart();

});
